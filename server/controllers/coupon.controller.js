const { User } = require("../models/user.model");
const { createJwtToken } = require("../utils/createJwtToken");
const {Coupon} = require("../models/coupons.model");




const generatecode = (length , format) =>{
    
    let result = '';
    if(format=='alpha')
    {
        
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }

    }
    else if(format=='numeric')
    {
        
        const characters = '1234567890';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
    }
    else
    {
     
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
    }
    return result;
    

}

const generatecoupon = async(req,res)=>{
    try {
        const {coupon_name ,coupon_type,format,Quantity,rules,discount,coupon_length} = req.body;
        console.log(coupon_length,format);
        const code = generatecode(coupon_length,format);
        console.log(code);
        const coupon = new Coupon({coupon_name ,coupon_type,format,Quantity,rules,discount,code:code});
        await coupon.save();
        res.status(200).json({message:"coupon generated" ,coupon:coupon});
    } 
    catch (error) {
        res.status(500).json({message:error.message});
    }
}






module.exports = {generatecode, generatecoupon}