import express from "express";
import connectDB from "./config/db.js"; // 👈 check path

const app = express();

// 🔥 VERY IMPORTANT — CALL THIS
connectDB();

app.listen(9999, () => {
  console.log("Server is running on port number:- 9999");
});