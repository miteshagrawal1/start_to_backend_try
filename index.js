require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//trying 
app.get('/twitter', (req, res)=>{
    res.send('good try, running.....')
})

app.get('/feelings', (req, res)=>{
    res.send('<h1>forget her, she has many other options</h1>')
})

//normal listen
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//for production using .env
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})