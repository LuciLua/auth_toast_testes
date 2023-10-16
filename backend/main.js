const express = require("express")
const app = express()
const port = 3000
const cors = require('cors'); // Importe o pacote cors

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configure o middleware cors
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5173'] // Permita solicitações apenas a partir deste domínio
  }));

app.get('/dashboard', (req, res) => {
    if (req.query.admin == 'true') {
        res.send(true)
    }
    else {
        res.send(false)
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})
