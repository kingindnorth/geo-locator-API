const Store = require("../models/store")
// @desc   get all stores
// @API    GET /api/stores
// @access public
const getStore = async(req,res)=>{
    try{
        const stores = await Store.find()
            res.json({
            status:200,
            success:true,
            dataCount:stores.length,
            data:stores
        })
    }catch(err){
        console.error(err);
        res.json({
            status:500,
            success:false,
            error:"internal server error"
        })
    }
}

// @desc   post a store
// @API    POST /api/stores
// @access public
const postStore = async(req,res)=>{
    try{
        const store = await Store.create(req.body)
        res.json({
            status:200,
            success:true,
            data:store
        })
    }catch(err){
        console.error(err);
        if(err.code === 11000) return res.json({
            status:(400),
            success:false,
            error:"please enter an unique id"
        })
        res.json({
            status:500,
            success:false,
            error:"internal server error"
        })
    }
}

module.exports = {
    getStore,
    postStore
}