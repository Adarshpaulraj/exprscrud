const express=require('express')
const UserController=require('../controller/User')
const router=express.Router()

router.get('/',UserController.getUser)
module.exports =router