import express, {Request, Response} from 'express';
import mainRoutes from './Routes/index';
import painelRouters from  './Routes/rooutes'
import path from  'path'

const server = express();

server.use(mainRoutes);
server.use(express.static(path.join(__dirname, '../public')))

server.use('/painel',painelRouters);server.use((req:Request, res:Response)=>{
        res.send('pagina não encontrada');
})




server.listen(4000);


