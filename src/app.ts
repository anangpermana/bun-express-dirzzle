import express from "express";
import { json } from "express";
import helmet from "helmet";
import compression from "compression";

import userRoutes from "@/modules/user/user.routes";

const app = express();
app.use(helmet());
app.use(compression());
app.use(json());

app.use("/api/users", userRoutes);

export default app;