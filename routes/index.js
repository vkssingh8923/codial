const express = require ('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');


console.log("loaded");

router.get('/',homeController.home);
router.use('/users',require('./users'))
router.use('/log',require('./loginsignin'));
router.use('/posts',require('./posts'))



module.exports = router;