import { Request, Response } from "express"

export class PingController{
    //GET#
    getPing(req: Request, res: Response){
        res.status(200);
        res.json({get: "true"})
    }
    //POST#
    postPing(req: Request, res: Response){
        console.log(req.body);
        res.status(201);
        res.json({post: req.body})
    }
}