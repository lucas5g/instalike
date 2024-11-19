import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'minha api test galdino'})
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor http://localhost:${port}`)
})