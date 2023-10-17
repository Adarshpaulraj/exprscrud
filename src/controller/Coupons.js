const coupons=[{
    name:"october offer",
    code:"dkh-jdk",
    startDate:"04-10-2023",
    endDate:"30-11-2023",
    offervalue:100,
    discount:10,
    status:true
},{
    name:"october offer",
    code:"dkh-hii",
    startDate:"10-10-2023",
    endDate:"25-11-2023",
    offervalue:100,
    discount:10,
    status:true
}]

const getAllCoupons=(req,res)=>{

    res.send({
       message:"sucessfully",
       count:coupons.length,
       coupons
     })}

 const getCouponsById=(req,res)=>{
    const id = Number(req.params.id)
    console.log(id)
    if(id !==NaN && id<coupons.length)
    {
        res.send({
            message :'succesflly get',
            coupon:coupons[id]
        })
    }else{
        res.send({
            message:'invalid'
        })
    }
 }
 const createCoupons=(req,res)=>{
    const data = req.body
    const filterdata= coupons.filter((e)=>e.code===data.code)
    if(filterdata.length==0){
       coupons.push(data)
       res.status(201).send({
        data:"sucessfully"

       })
    }else{
        req.status(404).send({
            data:'failed'
        })
    }
 }
 const editCoupons=(req,res)=>{
    const id = Number(req.params.id)
    console.log(id)
    if(id !==NaN && id<coupons.length)
    {     
        coupons.splice(id,1,req.body)
        res.send({
            message :'succesflly edited',
            coupon:coupons[id]
        })
    }else{
        res.send({
            message:'invalid'
        })
    }
 }
 const deleteCoupons=(req,res)=>{
    const id = Number(req.params.id)
    console.log(id)
    if(id !==NaN && id<coupons.length)
    {     
        coupons.splice(id,1,)
        res.send({
            message :' deleted succesflly get',
            coupon:coupons[id]
        })
    }else{
        res.send({
            message:'invalid'
        })
    }
 }
 module.exports ={
    getAllCoupons,
    getCouponsById,
    createCoupons,
    deleteCoupons,
    editCoupons
 }