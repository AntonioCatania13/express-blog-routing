const express = require('express');
//db
const connection = require('../data/db');

const router = express.Router();

//prova query string
router.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return next(err);
        res.json(results); 
    });

    // const ricerca = req.query.search

    // if (ricerca) {
    //     res.send(`search post by ${ricerca}`)
    // } else {
    //     res.send('lista dei post')}
})


router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    const sql = 'SELECT * FROM posts WHERE id=?';
    connection.query(sql, [id], (err, results) => {
        if(err) return next(err);
        if(results.length === 0) return res.status(404).json({ error: 'post not found'});
        res.json(results[0]);
    })
    // res.send(`detaglio post con id : ${id}`);
});

router.post('/', (req, res, next) => {
    const {title, content, image} = req.body;
    const sql = 'INSERT INTO posts (title, content, image) VALUES (?, ?, ?)';

    connection.query(sql, [title, content, image], (err, result) => {
        if(err) return next(err);
        res.status(201).json({message: 'post aggiunto con successo'});
    })
    // res.send('creazione nuovo post');
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`modifica interamente del post con id : ${id}`);
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`modifica parziale del post con id : ${id}`);
});

//destroy
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    connection.query('DELETE FROM posts WHERE id=?', [id], (err) => {
        if(err) return next(err);
        res.status(204).json({message: 'post eliminato'});
    });
    // res.send(`eliminazione del post con id : ${id}`);
});


module.exports = router;