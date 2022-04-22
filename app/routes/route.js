const express = require("express");
const { address } = require("../controllers/authcontroller");
const router = express();

const userRoute = require ('./router/Route');
const addressRoute = require ('../routes/router/addressRoute')

router.use('/', userRoute);
router.use('/', addressRoute);

module.exports = router;