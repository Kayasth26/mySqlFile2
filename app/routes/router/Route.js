const express = require('express');
const router = express();
const authController = require('../../controllers/authcontroller');
const authValidation = require('../../validation/authValidation');
const {generateToken, authenticate} = require('../../helper/authToken');

router.post("/loginUser", generateToken,authController.authUser);
router.post("/registration",authController.registration);
router.get("/viewProfile",authController.viewProfile);
router.put("/updateProfile",authenticate,authController.updateProfile);

module.exports = router;