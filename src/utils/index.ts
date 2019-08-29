import { Router, Request, Response, NextFunction, Application } from "express";

type Wrapper = ((app: Application, router: Router) => void);

export const applyMiddleware = (
    middlewareWrappers: Wrapper[],
    app: Application,
    router: Router,
) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(app, router);
    }
};

type Handler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void> | void;

type Route = {
    path: string;
    method: string;
    handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        (router as any)[method](path, handler);
    }
};
