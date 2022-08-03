const bcrypt = require("bcrypt");
const signUPModel = require("../model/signUPModel");
const mongoose = require("mongoose");
exports.getForgetPassword = (req,res) => {
    const userType= req.body.userType ? userType : "";
    const isAuthenticated = req.session.isLoggedIn ? req.session.isLoggedIn : false;
    const Admin = req.session.isAdminLoggedIn ? req.session.isAdminLoggedIn : false;
    res.render ("forgetPassword", {
        pageTitle: "Forget Password Page",
        isAuthenticated: isAuthenticated,
        Admin: Admin
    })
}

exports.postForgetPassword = (req,res) => {
        signUPModel.findOne({email: req.body.email }).then(user=> {
          bcrypt.hash(req.body.password, 10).then(hashedPassword=>{
            signUPModel.updateOne(
                { 
                password: user.password },
                {
                    $set: { password: hashedPassword}
                }).then( user=> {
                    console.log("password changed successfully");
                    res.redirect ("/signin")
                });
          });

        })
}