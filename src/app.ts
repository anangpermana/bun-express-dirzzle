import express from "express";
import { json } from "express";
import type { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

import userRoutes from "@/modules/user/user.routes";
import authRoutes from "@/modules/auth/auth.routes";

const app = express();
app.use(helmet());
app.use(compression());
app.use(json());
app.use(morgan(":method :url :status :response-time ms"));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("api");
});

// 404 harus setelah route "/", bukan sebelum.
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl,
  });
});

export default app;