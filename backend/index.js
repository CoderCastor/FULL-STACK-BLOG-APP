import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js" 

const app = express(); 

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, // This is crucial for cookie handling
  }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)


app.listen(8800,()=>{
    console.log("Backend is running!");
    
})