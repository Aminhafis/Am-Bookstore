
import dotenv from "dotenv"
import express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
import path from 'path'
import userRoute from './routes/userRoute.js'
import booksRoutes from './routes/booksRoutes.js'
import categoryRoute from './routes/categoryRoute.js'
import { fileURLToPath } from "url";
import cartRoute from "./routes/cartRoute.js";
import razorpayRoutes from "./routes/razorpayRoute.js" 

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port=12000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'public')))


mongoose.connect(process.env.MONGO_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Database was Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// .catch(err => {
//     console.log(err)
//     process.exit(1)
// })

app.use('/api/user',userRoute)
app.use('/api/book',booksRoutes)
app.use('/api/category',categoryRoute)
app.use(cartRoute)

app.use("/api",razorpayRoutes)


app.get("/", (req, res) => {
    res.send("Razorpay API is working");
});

app.get('/',(req,res)=>{
    res.send("Amin's bookstore")
})

app.listen(port,()=>{
    console.log(`The server is running on ${port}`);
})


