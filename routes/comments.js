const express = require ('express');
const router = express.Router();
const comments_controller = require('../controllers/comments_controller');
const passport = require('../config/passport-local-strategy')

router.post('/create_comments',passport.checkAuthUser,comments_controller.create_comment)



module.exports = router;