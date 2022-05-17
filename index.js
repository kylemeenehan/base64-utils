const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/encode/:text', (req, res) => {
    const result = Buffer.from(req.params.text).toString('base64');
    res.json({
        result
    })
})

app.get('/decode/:text', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
