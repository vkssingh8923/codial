const express = require ('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
const passport = require('../config/passport-local-strategy')

router.get('/profile',passport.checkAuthUser,userController.profile)
console.log("loaded");



module.exports = router;