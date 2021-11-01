import {Router, Response, Request} from 'express'


const router = Router();


router.get('/painel', (req: Request, res:Response)=>{
        res.send('kasnaksn');
});

router.get('/noticias', (req:Request, res:Response)=>{
    res.send('pagina de noticia');
})


export default router