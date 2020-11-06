const express = require('express')
const app = express()
const port = 5000

let todoExample = {
  	name: "Do dishes",
  	date: "tomorrow",
  	author: "Andrew",
  	done: false,
  	description: "Get the dishes done"
};

app.get('/todos', (req, res) => {
  res.send(todoExample)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})