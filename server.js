import express from 'express'
const app = express()

const posts = [
    {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Gato fazendo yoga",
      imagem: "https://placekitten.com/400/300"
    },
    {
      id: 3,
      descricao: "Gatinho dormindo",
      imagem: "https://placekitten.com/200/200"
    }
  ];

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