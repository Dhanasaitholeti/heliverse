import { Application, Request, Response } from "express";

const MainRouter = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "App is live and working" });
  });
};

export default MainRouter;
