const express = require("express");
const mongoose = require("mongoose");
const signUPModel = require("../model/signUPModel");
const bcrypt = require("bcrypt");
let userType="admin";
// sign up

exports.getSignUP = ((req, res) => {
    // let isAdmin = false;
    const isAuthenticated = req.session.isLoggedIn ? req.session.isLoggedIn : false;
    const Admin = req.session.isAdminLoggedIn ? req.session.isAdminLoggedIn : false;
    res.render("signup", {
        pageTitle: "Sign Up",
        isAuthenticated: isAuthenticated,
        Admin: Admin
    })
})

exports.postSignUP = ((req, res) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const signUP = new signUPModel({
            _id: mongoose.Types.ObjectId(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            userType: req.body.userType
        })
        signUP.save().then((signedUPUer) => {
            console.log("successfuly saved" + signedUPUer);
            res.redirect("/signin");

        });
    }).catch((err) => {
        console.log("The hash error is: " + err);
    });

})



//sign in
exports.getSignIn = ((req, res) => {
    // let isAdmin= false;
    // const userType = req.body.userType ? userType : "";
    const isAuthenticated = req.session.isLoggedIn ? req.session.isLoggedIn : false;
    const Admin = req.session.isAdminLoggedIn ? req.session.isAdminLoggedIn : false;
    res.render("signin", {
        pageTitle: "Sign In",
        isAuthenticated: isAuthenticated,
        Admin: Admin
    })
})


exports.postSignIn = ((req, res) => {
    signUPModel.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) {
            console.log("The err " + err)
        } else if (foundUser) {
            req.session.isLoggedIn = true,
                bcrypt.compare(req.body.password, foundUser.password, ((err, result) => {
                    if (result === true) {
                        if(foundUser._id == "62ea3b26654c9f3793c310e1"){
                            req.session.isAdminLoggedIn = true
                        }
                        res.redirect("/");
                    }
                    else {
                        res.redirect("/signin");
                    }

                }))
        } else {
            res.redirect("/signin");
        }

    })
})


//sign out 

exports.getSignOut = ((req, res) => {
    const isAuthenticated = req.session.isLoggedIn ? req.session.isLoggedIn : false;
    req.session.destroy()
    //    let  isAdmin = false
    // res.render('home', {
    //     pageTitle: "Sign Out",
    //     isAuthenticated: isAuthenticated,
    //     userType:  userType
    // })
    res.redirect("/")
})
