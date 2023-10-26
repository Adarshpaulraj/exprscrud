const express=require('express')
const UserController=require('../controller/User')

const router=express.Router()

router.get('/',UserController.getUser)
router.post('/',UserController.create)
module.exports =router