import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'

const app = express()
const url = process.env.MONGODB_URL
const client = new MongoClient(url)
await client.connect()
const db = client.db('instabytes')


app.get('/', (req, res) => {
    res.json({message: 'minha api test galdino'})
})

app.get('/posts', async (req, res) => {
    const posts = await db.collection('posts').find().toArray()
    res.json(posts)
})

app.get('/posts/:id', async (req, res) => {
    const post = await db.collection('posts').findOne({ _id: new ObjectId(req.params.id) })
    res.json(post)
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor http://localhost:${port}`)
})