const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    dervice:"Gmail",
    auth:{
        user:"devakumarigali14@gmqil.com",
        pass:"apfwyoumblwqmwyl"
    }
})
module.exports=transporter