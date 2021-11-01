import {Router, Response, Request} from 'express'


const router = Router();


router.get('/painel', (req: Request, res:Response)=>{
    res.send('home do painel')
});

router.get('/noticias', (req:Request, res:Response)=>{
    res.send('pagina de noticia');
})


export default router