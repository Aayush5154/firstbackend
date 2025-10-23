import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,//kis kis jagah se ham url accept karene
    credentials : true
}))

app.use(express.json({limit : "16kb"}))//ye to form bhara jab data aaya 
app.use(express.urlencoded({extended : true, limit : "16kb"}))//ye to url se data aaya
app.use(express.static("public"))//kabhi koi files aayi , pdf aayi to mere hi server me store ktna chahta hu to ek public folder bana dete h jo koi bhi access ker sake like in my public folder  
app.use(cookieParser())//

export { app }