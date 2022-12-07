const router = require("express").Router()
const {getStore,postStore} = require("../controllers/store")

router.get("/",getStore)

router.post("/",postStore)

module.exports = router