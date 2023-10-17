 const express=require('express')
 const CouponContoller =require("../controller/coupons");
 const router= express.Router()

router.get('/',CouponContoller.getAllCoupons)
router.get('/:id',CouponContoller. getCouponsById)
router.post('/',CouponContoller.createCoupons)
router.put('/:id',CouponContoller.editCoupons)
router.delete('/:id',CouponContoller.deleteCoupons)

module.exports = router