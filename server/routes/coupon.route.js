const router = require("express").Router();
const {
    generateStatic,
    generateDynamic,
} = require("../controllers/coupon.controller");
const { requireAuth } = require("../middlewares/auth.middleware");

router.post("/generateStatic", requireAuth, generateStatic);
router.post("/generateDynamic", requireAuth, generateDynamic);
// router.get('filter' ,filter_coupon);
module.exports = router;
