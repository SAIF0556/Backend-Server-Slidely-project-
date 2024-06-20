import { Router, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'

const readRouter = Router()
const dbFilePath = path.join(__dirname, '../db.json')

readRouter.get('/', (req: Request, res: Response) => {
  const index = req.query.index as string

  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read database file' })
    }

    const submissions = JSON.parse(data)

    if (index === '-1') {
      return res.status(200).json(submissions)
    }

    const idx = parseInt(index, 10)
    if (isNaN(idx) || idx < 0 || idx >= submissions.length) {
      return res.status(404).json({ error: 'Submission not found' })
    }

    res.status(200).json({ submission: submissions[idx] })
  })
})

export { readRouter }
