//commonjs
const  express = require('express');

// step 
const app = express();
const port = 3000;
const postsRouters = require('./routers/posts');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');
// const errorserversaid = require('./middlewares/errorservesaid');

//file public
app.use(express.static('public'));

// coversione oggetto javascript
// app.use(express.json());

//routing
app.use("/posts", postsRouters);
//home
app.get('/', (req, res) => {
    console.log('server avviato');

    res.send('server del mio blog');
})

// dati api utente
app.get('/user', (req, res) => {
    const user = {
        name: 'antonio',
        age: 28,
        role: 'eletricista',
        Image: 'http://localhost:3000/ispazio-41.jpg'
    };

    res.json(user)
});

// rotta dinamico
app.get('/post/:id', (req, res) => {
    const id = req.params.id;

    res.send(`blog db whit id: ${id}`)
});

/* app.get('/posts', (req, res) => {
    res.send('lista dei post');
}); */

//middleware erro
// app.use(errorserversaid)
app.use(errorHandler);

//middleware backend
app.use(notFound);

//start serve
app.listen(port, () => {
    console.log(`app server http://localhost:${port}`);
})