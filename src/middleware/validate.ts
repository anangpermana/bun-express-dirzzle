import type { ZodType } from "zod";
import type { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.issues, // use ZodError.issues
      });
    }

    req.body = result.data;
    next();
  };
