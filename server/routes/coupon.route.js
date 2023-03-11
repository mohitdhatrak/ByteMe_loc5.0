const router = require('express').Router();
const {generatecoupon} =  require('../controllers/coupon.controller');

router.post('/generatecoupon' , generatecoupon);
module.exports = router;