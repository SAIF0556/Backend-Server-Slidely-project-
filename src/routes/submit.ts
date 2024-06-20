import { Router, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'

const submitRouter = Router()
const dbFilePath = path.join(__dirname, '../db.json')

submitRouter.post('/', (req: Request, res: Response) => {
  // Validate and handle missing fields
  const {
    FullName = '', // Set default empty string for missing data
    EmailAddress = '',
    PhoneNumber = '',
    GitHubLink = '',
    stopwatch_time = '',
  } = req.body

  if (
    !FullName.trim() ||
    !EmailAddress.trim() ||
    !PhoneNumber.trim() ||
    !GitHubLink.trim() ||
    !stopwatch_time.trim()
  ) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // Create the new submission object
  const newSubmission = {
    FullName,
    EmailAddress,
    PhoneNumber,
    GitHubLink,
    stopwatch_time,
  }

  // Handle empty database file
  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read database file' })
    }

    let submissions = [] // Initialize submissions as an empty array
    try {
      submissions = JSON.parse(data) || [] // Parse data or use an empty array if parsing fails
    } catch (error) {
      console.error('Error parsing database file:', error)
      // You can choose to log the error and continue with an empty array or return a specific error response
    }

    submissions.push(newSubmission)

    fs.writeFile(dbFilePath, JSON.stringify(submissions, null, 2), (err) => {
      if (err) {
        return res
          .status(500)
          .json({ error: 'Failed to write to database file' })
      }

      res.status(201).json({ success: true, submission: newSubmission })
    })
  })
})

export { submitRouter }
