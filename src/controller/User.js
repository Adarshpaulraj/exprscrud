
const listItems=[{
    name:'ADARSH',
    phno:9489191947,
    email:'smartadarsh'
}]
const getUser=(req,res)=>{
    res.status(200).send({
        message:'user router',
        listItems
        
    })
}
module.exports = {
    getUser
}