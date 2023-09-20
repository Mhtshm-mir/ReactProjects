const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get("/",(req,res)=>{
    res.send('auth page')
})
router.post('/signup', authController.signup);


router.post('/login', authController.login);

module.exports = router;
