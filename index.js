import express from 'express' //111
import { routers } from './src/routers/routers.js'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

// console.log(process.env.DB_BASE);

const server = express() //222
const port = 3009 //333
let _dirname = path.resolve(path.dirname(''))

server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.set('view engine', 'ejs') //444
server.use(routers)
server.use(express.static(path.join(_dirname, 'public')))
server.listen(port, () =>{//555 depois desses passos cria-se a psta views com index.ejs
    console.log(`Estou rodando na porta ${port}`);
})
