const express = require('express');
const router = express.Router();

//prova query string
router.get('/', (req, res) => {
    const ricerca = req.query.search

    if (ricerca) {
        res.send(`search post by ${ricerca}`)
    } else {
        res.send('lista dei post')}
})


router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`detaglio post con id : ${id}`);
});

router.post('/', (req, res) => {
    res.send('creazione nuovo post');
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`modifica interamente del post con id : ${id}`);
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`modifica parziale del post con id : ${id}`);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`eliminazione del post con id : ${id}`);
});


module.exports = router;