const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000 || process.env.PORT

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})