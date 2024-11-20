import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()

const client = new MongoClient(process.env.MONGDODB_URL)


app.get('/', (req, res) => {
    res.json({message: 'minha api test galdino'})
})

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/posts/:id', (req, res) => {
    const post = posts.find(post => post.id === Number(req.params.id))
    res.json(post)
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor http://localhost:${port}`)
})