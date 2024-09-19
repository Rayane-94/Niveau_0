import express  from 'express'
import {addTask} from './model.js'

const app = express()
const port = 3000

app.use(express.json())//permet de récupérer
//données client json

var tasks = [
  {
    name:"dormir",
    description: "au moins 8 heures"
  }
]

app.get('/get-task', (req, res) => {
  return res.json(tasks)
})

app.post('/new', (req, res) => {addTask
  let name = req.body.name
  let description = req.body.description

  tasks = addTask(tasks, name, description)
  res.json({"message" : "ok"})
})




// PAS DE GOODBYE : donc 404 ! \O/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 