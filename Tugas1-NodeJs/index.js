const express = require("express")
const app = express()
const port = 8080
const apirouter = require("./api-routes.js")

app.get ("/", (req, res) => {
    res.send ("Selamat Datang Di Data Center Siswa Indonesia")
    
})

app.use ("/DataSiswa", apirouter)

app.listen (port, ()=> {
    console.log(`server berjalan di port ${port}`)
})