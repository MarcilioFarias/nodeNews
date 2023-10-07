//required library
import express, { Router } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
//Route file
import mainRoutes from './routes/index';


dotenv.config();

const server = express();

//template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));//folder path
server.engine('mustache', mustache());

//static files
server.use(express.static(path.join(__dirname, '../public')));

//routes
server.use(mainRoutes);
//404
server.use((req, res)=> {
    res.send('Page not found :(');
});

//run
server.listen(process.env.PORT);