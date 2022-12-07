const mongoose = require("mongoose")

const StoreSchema = new mongoose.Schema({
    storeID:{
        type:String,
        required:[true,"please enter the store id"],
        unique:true,
        trim:true,
        maxLength:[10,"please enter id less than 10 chars"]
    },
    address:{
        type:String,
        required:[true,"please enter an address"]
    },
    location:{
        type:{
            type:String,
            enum:["Point"]
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
          },
        formattedAddress: String
    },
    createdAT:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("store",StoreSchema)