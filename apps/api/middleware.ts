import type { NextFunction, Request, Response } from 'express'
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header('authorization');

    req.userId = "1";
    next()
}
