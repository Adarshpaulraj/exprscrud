const mongoose= require('mongoose')

const db= require('../common/dbConfig')

try {
     mongoose.connect(`${db.dbUrl}${db.dbName}`)
    console.log(" database conected successfully"); 
} catch (error) {
    console.log("error")
}

 module.exports = mongoose