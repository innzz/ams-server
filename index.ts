import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes";
import connectDB from "./db";

// import v2Routes from "./routes/v2/index.js";
dotenv.config();

const app = express();
const port = process.env.PORT


app.use(express.json({ limit: "50mb" })); //body parsing
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", routes)
connectDB();

app.get("/", async (req,res)=>{
    res.send("Wow")
});

app.listen(port, async() => {
  console.log("Server is Working!");
});


export default app;
