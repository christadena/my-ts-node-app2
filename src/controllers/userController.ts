// src/controllers/userController.ts
import { Request, Response } from 'express';
import { findUserById } from '../services/userService';

export const getUser = (req: Request, res: Response) => {
  const user = findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
