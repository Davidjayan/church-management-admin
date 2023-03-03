export const returnTemplate = (status: number, message: any,res:any) => {
    if(status==1){
        return res.status(200).send({status,message})
    }else{
        return res.status(400).send({ status, message })
    }
}
