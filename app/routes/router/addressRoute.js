const express = require('express');
const router = express();

const addressUsController= require('../../controllers/addressUsController');
const { authenticate } = require('../../helper/authToken');

router.post("/address",authenticate,addressUsController.address);
router.get("/viewaddress",authenticate,addressUsController.viewaddress);
router.put("/updateaddress/:id",authenticate,addressUsController.updateaddress);
router.delete("/deleteaddress/:id",authenticate,addressUsController.deleteaddress);

module.exports = router