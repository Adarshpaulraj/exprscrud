const express=require('express')
const router=express.Router()
const CouponsRouter=require('./Coupon')

router.use('/coupons',CouponsRouter)

module.exports= router
