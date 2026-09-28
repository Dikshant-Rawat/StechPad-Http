import { NextFunction, Request, Response } from "express";
declare module "express" {
    interface Request {
        userId?: string;
    }
}
export declare function middleware(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=middleware.d.ts.map