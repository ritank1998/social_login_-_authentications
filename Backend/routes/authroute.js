import express from 'express'
import passport from 'passport'
const route = express.Router()

route.get("/login/success" , (req,res)=>{
    if(req.user){
        res.status(200).json({
            success: true,
            message: "Aja aja ho gya !!",
            user: req.user,
            //cookies: req.cookies or jwt
        })
    }
   
})

route.get("/login/failed" , (req,res)=>{
    res.status(401).json({
        success: false,
        message: "failure"
    })
})

route.get("/logout" , (req,res)=>{
    req.logout();
    req.redirect("http://localhost:3000/home")
})

route.get("/google" , passport.authenticate("google" , {scope:["profile"]}))
route.get("/google/callback" , passport.authenticate("google" , {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login/failed"
}))


route.get("/github" , passport.authenticate("github" , {scope:["profile"]}))
route.get("/github/callback" , passport.authenticate("github" , {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login/failed"
}))

route.get("/discord" , passport.authenticate("discord" , {scope:["profile"]}))
route.get("/discord/callback" , passport.authenticate("discord" , {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login/failed"
}))










export default route