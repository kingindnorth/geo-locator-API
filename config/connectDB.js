const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to database")
    }catch(err){
        console.log(err)
        throw err;
    }
}

module.exports = connectDB