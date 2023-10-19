const router = require("express").Router()

//Services routes

const servicesRouter = require("./services")

router.use("/", servicesRouter)

module.exports = router