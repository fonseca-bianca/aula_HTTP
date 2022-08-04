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
    res.send(usuarios)
})

app.listen(8000, () => {
    console.log('Rodando na porta 8000')
})