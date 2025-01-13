import { plainToInstance } from "class-transformer"
import { validate } from "class-validator"
import { Request, Response, NextFunction } from "express"

export const validateMiddleware = (dto: any) => async (req: Request, res: Response, next: NextFunction) => {
    const instance = plainToInstance(dto, req.body);
    const error = await validate(instance)

    if (error.length > 0) {
        return res.status(400).json(error.map(err => err.constraints))
    }

    next();
}