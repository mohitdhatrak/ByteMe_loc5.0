const { Coupon } = require("../models/coupons.model");
const { User } = require("../models/user.model");
const { createJwtToken } = require("../utils/createJwtToken");

const signup = async (req, res) => {
    const userData = req.body;

    try {
        const existingUser = await User.findOne({
            email: userData.email,
        });

        if (!existingUser) {
            const newUser = new User(userData);
            await newUser.save();

            const jwtToken = createJwtToken(newUser._id);

            res.cookie("jwtToken", jwtToken, {
                maxAge: process.env.COOKIE_EXPIRES_IN,
                httpOnly: true,
                // adding samesite and secure to ensure cookies work in https
                sameSite: "none",
                secure: true,
            });

            res.cookie("userId", newUser._id, {
                maxAge: process.env.COOKIE_EXPIRES_IN,
                httpOnly: true,
                // adding samesite and secure to ensure cookies work in https
                sameSite: "none",
                secure: true,
            });

            res.status(200).json({
                userId: newUser._id,
                message: "Account created successfully!",
            });
        } else {
            res.status(400).json({
                message: "This email is already registered, try logging in!",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "There was some error while creating your account",
            error,
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password); // using the static method login we created in User model
        if (user === 401) {
            throw new Error("Incorrect password!");
        } else if (user === 404) {
            throw new Error(
                "This email is not registered, user does not exist!"
            );
        } else {
            const jwtToken = createJwtToken(user._id);

            res.cookie("jwtToken", jwtToken, {
                maxAge: process.env.COOKIE_EXPIRES_IN,
                httpOnly: true,
                // adding samesite and secure to ensure cookies work in https
                sameSite: "none",
                secure: true,
            });

            res.cookie("userId", user._id, {
                maxAge: process.env.COOKIE_EXPIRES_IN,
                httpOnly: true,
                // adding samesite and secure to ensure cookies work in https
                sameSite: "none",
                secure: true,
            });

            res.status(200).json({
                userId: user._id,
                message: "Logged in successfully!",
                // jwtToken,
            });
        }
    } catch (error) {
        res.status(400).json({
            message:
                error.message || "There was some error while authentication",
        });
    }
};

const logout = async (req, res) => {
    res.cookie("jwtToken", "", {
        // maxAge: process.env.COOKIE_EXPIRES_IN,
        httpOnly: true,
        // adding samesite and secure to ensure cookies work in https
        sameSite: "none",
        secure: true,
    });

    res.cookie("userId", "", {
        // maxAge: process.env.COOKIE_EXPIRES_IN,
        httpOnly: true,
        // adding samesite and secure to ensure cookies work in https
        sameSite: "none",
        secure: true,
    });

    res.status(200).json({
        message: "User logged out!",
    });
};

const getUser = async (req, res) => {
    const currentUser = await req.user; // need to use await here?
    // console.log(currentUser);

    res.status(200).json({
        userId: currentUser._id,
        message: "Set user",
    });
};

const staticCoupons = async (req, res) => {
    try {
        const currentUser = await req.user;
        const coupons = await Coupon.find({
            owner: currentUser._id,
            coupontype: "static",
        });
        // console.log(coupons[0]._id, coupons[1]._id);
        res.status(201).json({
            coupons: coupons,
            message: "Coupons retrieved",
        });
    } catch (error) {
        res.status(501).json({ message: error.message });
    }
};

const dynamicCoupons = async (req, res) => {
    try {
        const currentUser = await req.user;
        const coupons = await Coupon.find({
            owner: currentUser._id,
            coupontype: "dynamic",
        });
        // console.log(coupons[0]._id, coupons[1]._id);
        res.status(201).json({
            coupons: coupons,
            message: "Coupons retrieved",
        });
    } catch (error) {
        res.status(501).json({ message: error.message });
    }
};

module.exports = {
    signup,
    login,
    logout,
    getUser,
    staticCoupons,
    dynamicCoupons,
};
