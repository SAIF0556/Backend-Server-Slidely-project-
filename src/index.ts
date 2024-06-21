import express from 'express'
import bodyParser from 'body-parser'
import { pingRouter } from './routes/ping'
import { submitRouter } from './routes/submit'
import { readRouter } from './routes/read'
import { deleteRouter } from './routes/delete'
import { updateRouter } from './routes/update'

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use('/ping', pingRouter)
app.use('/submit', submitRouter)
app.use('/read', readRouter)
app.use('/delete', deleteRouter) // Add delete route
app.use('/update', updateRouter) // Add update route

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
