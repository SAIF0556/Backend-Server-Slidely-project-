import { Router, Request, Response } from 'express'
import fs from 'fs'

const searchRouter = Router()
const dbFilePath = 'src/db.json'

searchRouter.get('/', (req: Request, res: Response) => {
  const email = req.query.email as string
  const submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'))

  const foundSubmissions = submissions.filter((submission: any) =>
    submission.EmailAddress.toLowerCase().includes(email.toLowerCase()),
  )

  if (foundSubmissions.length > 0) {
    res.status(200).json(foundSubmissions)
  } else {
    res
      .status(404)
      .json({ message: 'No submissions found with the provided email' })
  }
})

export { searchRouter }
