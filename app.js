const express = require('express')

const app = express()

let usuarios = [
    {
        id: 1,
        nome: 'Martin',
        sobrenome: 'Lofrano de Oliveira',
        idade: 29
    },
    {
        id: 2,
        nome: 'Diogenes',
        sobrenome: 'Pereira',
        idade: 30
    },
    {
        id: 1,
        nome: 'Jonatas',
        sobrenome: 'Pereira',
        idade: 30
    }
]


app.use(express.json())
app.get('/usuarios', (req, res) => {
    res.status(200).send(usuarios)
})

app.post('/usuarios', (req, res) => {
    usuarios.push(req.body)
    res.status(201).send(usuarios)
})

app.put('/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(usr => usr.id == req.params.id)

    if (!usuario){
        return res.status(400).json({error: 'Usuario não encontrado.' });
    }

    usuario.nome = req.body.nome
    usuario.sobrenome = req.body.sobrenome
    usuario.idade = req.body.idade
    res.send(usuarios)
})

app.delete('/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(usr => usr.id == req.params.id)
    usuarios.splice(usuarios.indexOf(usuario), 1)
    res.status(204).send(usuarios)
})

app.listen(8000, () => {
    console.log('Rodando na porta 8000')
})