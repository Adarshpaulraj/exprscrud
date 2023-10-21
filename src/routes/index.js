const express=require('express')
const router=express.Router()
const CouponsRouter=require('./Coupon')
const User=require('./User')

router.use('/coupons',CouponsRouter)
router.use('/user',User)

module.exports= router
