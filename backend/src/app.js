import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";

import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);

// socket connection
connectToSocket(server);

app.set("port", process.env.PORT || 8000);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/users", userRoutes);

// start server
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://chaudharyadarsh29_db_user:Adarsh210303@cluster0.ihwrcfb.mongodb.net/videocall?retryWrites=true&w=majority"
    );

    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
      console.log(`SERVER RUNNING ON PORT ${app.get("port")}`);
    });

  } catch (error) {
    console.log("MongoDB Connection Error:", error);
  }
};

start();