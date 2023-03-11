const router = require('express').Router();
const {generatecoupon} =  require('../controllers/coupon.controller');
const { requireAuth } = require('../middlewares/auth.middleware');

router.post('/generatecoupon' , generatecoupon);
// router.get('filter' ,filter_coupon);
module.exports = router;