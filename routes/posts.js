const express = require ('express');
const router = express.Router();
const posts_controller = require('../controllers/posts_controllers');
const passport = require('../config/passport-local-strategy')

router.post('/create_post',passport.checkAuthUser,posts_controller.create_post)



module.exports = router;