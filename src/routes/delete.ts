import { Router, Request, Response } from 'express'
import fs from 'fs'

const deleteRouter = Router()
const dbFilePath = 'src/db.json'

deleteRouter.delete('/', (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string, 10)
  const submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'))

  if (index >= 0 && index < submissions.length) {
    submissions.splice(index, 1)
    fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2))
    res.status(200).json({ success: true, message: 'Submission deleted' })
  } else {
    res.status(404).json({ success: false, message: 'Submission not found' })
  }
})

export { deleteRouter }
