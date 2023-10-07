/*Os controllers servem para criar formas
de quais conteudos serao carregados na mesma
pagina do site */

import { Request, Response } from "express";
//getting from helper
import {createMenuObject} from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {

    //res.send('home controller'); usado quando nao tem conteudo
    res.render('pages/home', {
        menu: createMenuObject('home'),
        banner: {
            title: 'Home',
            background: 'b1.jpg',            
        }
    });
}

export const aboutUs = (req:Request, res:Response) => {
    res.render('pages/home', {
        menu: createMenuObject('aboutus'),
        banner: {
            title: 'About Us',
            background: 'b2.jpg'
        }
    });
}

export const services = (req:Request, res:Response) => {
    res.render('pages/home', {
        menu: createMenuObject('services'),
        banner: {
            title: 'Services',
            background: 'b3.jpg'
        }
    })
}

export const external = (req:Request, res:Response) => {
    res.render('pages/home', {
        menu: createMenuObject('external'),
        banner: {
            title: 'External',
            background: 'b4.jpg'
        }
    });
}

