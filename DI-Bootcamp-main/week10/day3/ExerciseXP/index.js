import express from "express";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user/", userRoute);

app.listen(3000, () => console.log("Server run on port 3000"));
