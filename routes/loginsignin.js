const express = require ('express');
const router = express.Router();
const logcontroller = require('../controllers/logcontroller');
const { route } = require('./users');
const passport = require('passport');

router.get('/login',logcontroller.login)

router.get('/signup',logcontroller.signup)

router.post('/create',logcontroller.create)

router.post('/create_session',passport.authenticate('local',{failureRedirect:'/log/login'}),logcontroller.create_session)

module.exports = router;