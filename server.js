const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    const absolutePath = __dirname + '/public/index.html'
    res.sendFile(absolutePath)
})

app.get('/batman', (req, res) => {
    const absolutePath = __dirname + '/public/batman.html'
    res.sendFile(absolutePath)
})

app.get('/superman', (req, res) => {
    const absolutePath = __dirname + '/public/superman.html'
    res.sendFile(absolutePath)
})

app.get('/flash', (req, res) => {
    const absolutePath = __dirname + '/public/flash.html'
    res.sendFile(absolutePath)
})

app.get('/aquaman', (req, res) => {
    const absolutePath = __dirname + '/public/aquaman.html'
    res.sendFile(absolutePath)
})

app.get('/green_lantern', (req, res) => {
    const absolutePath = __dirname + '/public/green_lantern.html'
    res.sendFile(absolutePath)
})

app.get('/wonder_woman', (req, res) => {
    const absolutePath = __dirname + '/public/wonder_woman.html'
    res.sendFile(absolutePath)
})

app.get('/spiderman', (req, res) => {
    const absolutePath = __dirname + '/public/spiderman.html'
    res.sendFile(absolutePath)
})

app.get('/thor', (req, res) => {
    const absolutePath = __dirname + '/public/thor.html'
    res.sendFile(absolutePath)
})

app.get('/ironman', (req, res) => {
    const absolutePath = __dirname + '/public/ironman.html'
    res.sendFile(absolutePath)
})

app.get('/hulk', (req, res) => {
    const absolutePath = __dirname + '/public/hulk.html'
    res.sendFile(absolutePath)
})

app.get('/blackwidow', (req, res) => {
    const absolutePath = __dirname + '/public/black_widow.html'
    res.sendFile(absolutePath)
})

app.get('/antman', (req, res) => {
    const absolutePath = __dirname + '/public/antman.html'
    res.sendFile(absolutePath)
})


app.listen(5000, () => {
    console.log('Server listening on port 5000')
})