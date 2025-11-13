import type { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await UserService.register(name, email, password);
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await UserService.login(email, password);
      res.json(result);
    } catch (err: any) {
      res.status(401).json({ error: err.message });
    }
  }

  static async profile(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const user = await UserService.getProfile(userId);
      res.json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
