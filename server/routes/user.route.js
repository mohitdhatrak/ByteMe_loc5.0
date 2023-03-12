const express = require("express");
const userRouter = express.Router();

const {
    signup,
    login,
    logout,
    getUser,
    staticCoupons,
    dynamicCoupons,
} = require("../controllers/user.controller");
const { requireAuth } = require("../middlewares/auth.middleware");

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/logout", requireAuth, logout);
userRouter.get("/", requireAuth, getUser);
userRouter.get("/staticCoupons", requireAuth, staticCoupons);
userRouter.get("/dynamicCoupons", requireAuth, dynamicCoupons);

module.exports = userRouter;
