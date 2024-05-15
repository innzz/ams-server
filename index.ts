import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes";
import connectDB from "./db";

// import v2Routes from "./routes/v2/index.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: "50mb" })); //body parsing
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use(
    cors({
      origin: "*",
    })
  );

app.use("/api", routes);

app.get("/", async (req, res) => {
  res.send(`Wow ${process.env.MONGO_URI}`);
});

app.listen(port, async () => {
  console.log("Server is Working!");
});

export default app;
