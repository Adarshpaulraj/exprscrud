const userModel=require('../models/User')
 
const getUser= async(req,res)=>{
    try {
        let users = await userModel.find()
        res.status(200).send({
            message:"sucess",
            users
        })
     } catch (error) {
        console.log(error)
        res.status(500).send({
           message:"server eror" ,
           
        }
        )
     }
}
const create = async(req,res)=>{
         try {
            let user = await userModel.create(req.body)
            res.status(201).send({
                message:"sucessfuly created",
                user
            })
         } catch (error) {
            res.status(500).send({
               message:"server erroror" 
            }
            )
         }
}
module.exports = {
    getUser,
    create
}