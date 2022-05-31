const path = require('path')
const express = require('express')
const axios = require('axios')

const app = express()
const baseURL = 'https://enginetest.hyperbeam.com/v0'
const apiKey = process.env.HB_API_KEY
let computer

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

// Get a cloud computer object
// Creates a cloud computer if the object hasn't been created
app.get('/computer', async (req, res) => {
  if (computer) {
    res.send(computer)
    return
  }
  try {
    const resp = await axios({
      method: 'POST',
      url: baseURL + '/vm',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
    computer = resp.data
    res.send(computer)
  } catch (e) {
    console.error(e)
    res.status(500)
  }
})

app.listen(8080)
console.log('Server start at http://localhost:8080')
