import express, { Application, Request, Response } from 'express'
import searchname from './Endpoints/searchname'
import { db } from './Utils/db'
import cors from 'cors'
import cron from 'node-cron'
import moment from 'moment'
import { AccountMaintenance } from './Models/AccountMaintenance'
import { AccountingResolver } from './Endpoints/AccountingResolver'
import { FormResolver } from './Endpoints/FormResolver'
import { YoutubeResolver } from './Endpoints/YoutubeResolver'
const app: Application = express()
const port = 9090

const corsOpts = {
  origin: '*',

  methods: ['GET', 'POST'],

  allowedHeaders: ['Content-Type'],
}
// Body parsing Middleware
app.use(cors(corsOpts))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
  res.send('Ok')
})

app.get(
  '/fetchPerson',
  async (req: Request, res: Response): Promise<Response> => {
    return await FormResolver.fetchData(req, res)
  },
)

app.post(
  '/forminsert',
  async (req: Request, res: Response): Promise<Response> => {
    return await FormResolver.insert(req, res)
  },
)


app.get(
  '/believersnames',
  async (req: Request, res: Response): Promise<Response> => {
    return await FormResolver.searchName(req, res)
  },
)

app.post(
  '/insert-accounting-information',
  async (req: Request, res: Response): Promise<Response> => {
    return await AccountingResolver.insertData(req, res)
  },
)

app.get(
  '/fetch-accounting-information',
  async (req: Request, res: Response): Promise<Response> => {
    return await AccountingResolver.fetchAccountingInformation(req, res)
  },
)

app.get(
  '/get-pdf',
  async (req: Request, res: Response): Promise<Response> => {
    return await AccountingResolver.getDataPdf(req, res)
  },
)

app.get(
  '/get-data-only',
  async (req: Request, res: Response): Promise<Response> => {
    return await AccountingResolver.getDataOnly(req, res)
  },
)

app.post('/post-new-youtube-id', async (req: Request, res: Response): Promise<Response> => {
  return await YoutubeResolver.insert(req, res)
},)
app.get('/get-latest', async (req: Request, res: Response): Promise<Response> => {
  return await YoutubeResolver.getLatest(req, res)
},)

db.sync({ alter: true }).then(() => {
  console.log('db is ready')
})

db.query(
  `SELECT Name,DOB,WeddingDate,Mobile from member_details where DATE_FORMAT(DOB, '%m %d')='${moment().month() + 1
  } ${moment().date()}'`,
).then((val) => {
  console.log(val)
})

// cron.schedule('0   6  *   *   *',()=>{
//   console.log("asd");

// })

try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`)
}
