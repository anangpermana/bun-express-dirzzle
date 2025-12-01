import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validate } from "@/middleware/validate";
import { registerSchema } from "./auth.schema";

const router = Router();

router.post(
  "/register",
  validate(registerSchema),
  AuthController.register
);

export default router;