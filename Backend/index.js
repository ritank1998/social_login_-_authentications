import express from "express"
import cors from "cors"
import cookieSession from "cookie-session"
import "./passport.js"
import authRoute from "./routes/authroute.js"
import passport from "passport"
const app = express()
const port = 1101

app.use(express.json())

app.use(cookieSession(
    {
        name: "session",
        keys:['CRCL'],
        maxAge: 24*60*60*100
    }
))

app.use(passport.initialize())
app.use(passport.session())


app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, POST , PUT ,DELETE",
        credentials: true
    })
)

app.use("/auth" , authRoute)


app.listen(port , ()=>{
    console.log("working fine on the port" , port)
})