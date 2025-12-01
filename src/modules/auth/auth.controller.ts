import type { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await AuthService.register(name, email, password);

      res.status(201).json({
        message: 'Registration success',
        data: {
          id: user?.id,
          name: user?.name,
          email: user?.email
        }
      });
    } catch (err: any) {
      console.log('err', err.message)
      res.status(400).json({
        message: err.message || 'Something went wrong'
      });
    }
  }
}