import { form } from './../controllers/formController';
import { Router } from "express";
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';
import * as formConstroller from '../controllers/formController';


const router = Router();

router.get('/', pageController.home);
router.get('/aboutus', pageController.aboutUs);
router.get('/services', pageController.services);
router.get('/external', pageController.external);

router.get('/search', searchController.search);



export default router;

//rota para cada menu, busca e formulario