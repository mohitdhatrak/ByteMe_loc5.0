const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const couponSchema = new Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    coupon_name:{
        type:String
    },
    coupon_company:{
        type:String
    },
    coupon_sector:{
        type:String
    },
    coupontype:{
        type:String,
        enum:['static' ,'dynamic']
    },
    format:{type:String ,enum:['alphanumeric','numeric','alpha']},
    code:{
        type:String
    },
    Quantity:{
        type:Number
    },
    rules:{
        minorder:{type:Number},
        validtill:{type:Number}

    },
    discount: {
        discount_type: {type:String,enum:['amount_off' ,'percent_off']},
        value: {type:Number,max:[100,'Discount should not exceed 100']}
    }
},{
        timestamps: true,
    }
);
const Coupon = mongoose.model("Coupon" , couponSchema);
module.exports={Coupon};