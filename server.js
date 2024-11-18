import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'minha api test'})
})

const port = 3000
console.log(process.env.GEMINI_API_KEY)
app.listen(port, () => {
    console.log(`Servidor http://localhost:${port}`)
})