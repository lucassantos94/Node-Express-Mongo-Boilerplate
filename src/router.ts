import { Application, Router, Request, Response } from 'express';

const router = (app: Application): void => {
  const apiRouter: Router = Router();
  apiRouter.get(
    '/',
    (req: Request, res: Response): void => {
      res.status(200).json({ message: 'sample root GET request.' });
    }
  );
  app.use('/api/v1', apiRouter);
};

export default router;
