exports.getProduct=((req,res)=> {
    // let isAdmin = false;
    const userType= "";
    const isAuthenticated = req.session.isLoggedIn ? req.session.isLoggedIn : false;
    res.render("home", {  
        pageTitle: "Home Page",
        isAuthenticated: isAuthenticated,
        userType: userType
    })
 })
