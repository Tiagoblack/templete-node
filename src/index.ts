import express, {Request, Response} from 'express';
import path from  'path'
import mustache from 'mustache-express'

import mainRoutes from './Routes/index';
import painelRouters from  './Routes/rooutes'



const server = express();

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(mainRoutes);
server.use(express.static(path.join(__dirname, '../public')))

server.use('/painel',painelRouters);server.use((req:Request, res:Response)=>{
        res.send('pagina não encontrada');
})




server.listen(4000);


