import {Router , Request, Response, request, response} from 'express';


const router = Router();

router.get('/', (req:Request, res: Response)=>{
    res.send('Página home');

});


router.get('/contato', (req: Request, res:Response)=>{
    res.send('Pagina de forumário de contato')
});
router.get('/sobre', (req:Request, res:Response)=>{
    res.send('pagina sobre')
});


export default router;

