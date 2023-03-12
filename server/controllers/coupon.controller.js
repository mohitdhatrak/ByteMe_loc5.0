const { Coupon } = require("../models/coupons.model");

const generatecode = (length, format) => {
    let result = "";
    if (format == "alpha") {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
            counter += 1;
        }
    } else if (format == "numeric") {
        const characters = "1234567890";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
            counter += 1;
        }
    } else {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
            counter += 1;
        }
    }
    return result;
};

const generateStatic = async (req, res) => {
    try {
        const {
            coupon_name,
            coupon_type,
            format,
            quantity,
            rules,
            discount,
            coupon_length,
        } = req.body;
        const code = generatecode(coupon_length, format);
        const coupon = new Coupon({
            coupon_name,
            coupon_type,
            format,
            quantity,
            rules,
            discount,
            code: code,
            owner: req.user._id,
        });
        await coupon.save();
        res.status(200).json({ message: "Coupon generated", coupon: coupon });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const generateDynamic = async (req, res) => {
    try {
        const {
            userId,
            coupon_type,
            format,
            quantity,
            discount,
            coupon_length,
        } = req.body;
        const code = generatecode(coupon_length, format);
        const coupon = new Coupon({
            coupon_type,
            format,
            quantity,
            userId,
            discount,
            code: code,
            owner: req.user._id,
        });
        await coupon.save();
        res.status(200).json({ message: "Coupon generated", coupon: coupon });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { generatecode, generateStatic, generateDynamic };
