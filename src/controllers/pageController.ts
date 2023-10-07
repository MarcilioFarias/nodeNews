/*Os controllers servem para criar formas
de quais conteudos serao carregados na mesma
pagina do site */

import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {

    res.send('home controller');
    //res.render('pages/home);
}

export const aboutUs = (req:Request, res:Response) => {
    res.send('about us controller');
}

export const services = (req:Request, res:Response) => {
    res.send('services controller');
}

export const external = (req:Request, res:Response) => {
    res.send('external controller');
}

