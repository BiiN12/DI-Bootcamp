import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import storiesRoute from "./routes/storiesRoute.js";
import contributorsRoute from "./routes/contributorsRoute.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth/", authRoute);
app.use("/api/stories/", storiesRoute);
app.use("/api/contributors", contributorsRoute);

app.listen(5001, () => console.log("Server run on port 5001"));
