import express, { Application, Request, Response } from 'express'
import searchname from './Endpoints/searchname'
import { db } from './Utils/db'
import cors from 'cors';
import cron from 'node-cron';
import moment from 'moment';
import { AccountMaintenance } from './Models/AccountMaintenance';
import { AccountingResolver } from './Endpoints/AccountingResolver';
const app: Application = express()
const port = 5000

const corsOpts = {
  origin: '*',

  methods: ['GET', 'POST'],

  allowedHeaders: ['Content-Type'],
}
// Body parsing Middleware
app.use(cors(corsOpts));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get(
  '/believersnames',
  async (req: Request, res: Response): Promise<Response> => {
    return await searchname(req, res)
  },
)

app.get(
  '/test',
  async (req: Request, res: Response): Promise<Response> => {
    return await AccountingResolver.testA(req,res);
  },
)



db.sync({alter:true}).then(() => {
  console.log('db is ready')
});

db.query(`SELECT Name,DOB,WeddingDate,Mobile from member_details where DATE_FORMAT(DOB, '%m %d')='${moment().month()+1} ${moment().date()}'`).then((val)=>{
  console.log(val);
})


// cron.schedule('0   6  *   *   *',()=>{
//   console.log("asd");
  
// })


try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
} catch (error:any) {
  console.log(`Error occurred: ${error.message}`)
}
