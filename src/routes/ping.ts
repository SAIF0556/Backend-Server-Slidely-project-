import { Router, Request, Response } from 'express'

const pingRouter = Router()

pingRouter.get('/', (req: Request, res: Response) => {
  res.json({ success: true })
})

export { pingRouter }
