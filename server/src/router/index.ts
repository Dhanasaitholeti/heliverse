import { Application, Request, Response } from "express";
import userRouter from "./userRoutes";

const MainRouter = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "App is live and working" });
  });

  app.use("/api/users", userRouter);
};

export default MainRouter;
