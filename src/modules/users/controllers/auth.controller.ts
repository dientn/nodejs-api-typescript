import {Request, Response, NextFunction} from "express";

export function signUp (req: Request, res: Response, next:NextFunction) {
    return res.send('Sign up api');
}
