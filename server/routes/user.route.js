const express = require("express");
const userRouter = express.Router();

const {
    signup,
    login,
    logout,
    getUser,
    mycoupons

} = require("../controllers/user.controller");
const { requireAuth } = require("../middlewares/auth.middleware");

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/logout", requireAuth, logout);
userRouter.get("/", requireAuth, getUser);
userRouter.get("/mycoupons" , requireAuth,  mycoupons);

module.exports = userRouter;
