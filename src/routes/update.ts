import { Router, Request, Response } from 'express'
import fs from 'fs'

const updateRouter = Router()
const dbFilePath = 'src/db.json'

updateRouter.put('/', (req: Request, res: Response) => {
  const index = parseInt(req.body.index, 10)
  const updatedSubmission = req.body.submission
  const submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'))

  if (index >= 0 && index < submissions.length) {
    submissions[index] = updatedSubmission
    fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2))
    res.status(200).json({ success: true, message: 'Submission updated' })
  } else {
    res.status(404).json({ success: false, message: 'Submission not found' })
  }
})

export { updateRouter }
