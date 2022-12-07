const mongoose = require("mongoose")

const geocoder = require("../utils/gecoder")

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

StoreSchema.pre("save",async function(next){
    const loc = await geocoder.geocode(this.address)
    this.location = {
        type:"Point",
        coordinates:[
            loc[0].latitude,
            loc[0].longitude
        ],
        formattedAddress:loc[0].formattedAddress

    }

    //do not save address in db
    this.address = undefined
    next()
})

module.exports = mongoose.model("store",StoreSchema)