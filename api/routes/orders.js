const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello I am orders')
})

router.get('/:id', (req, res) => {
    const idOrder = req.params.id;

    res.send(idOrder)
})

router.post('/', (req, res) => {
    res.send('I am POST')
})

router.put('/:id', (req, res) => {
    res.send('I am PUT')
})

router.delete('/:id', (req, res) => {
    res.send('I am DELETE')
}) 

module.exports = router;