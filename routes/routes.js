const express = require('express')
const router = express.Router()

const Model = require('../model/model')

// post
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }
})

// get
router.get('/get', (req, res) => {
    res.send('Get API')
})

// get by id
router.get('/getById/:id', (req, res) => {
    res.send(req.params.id)
})

// update
router.patch('/update/:id', (req, res) => {
    res.send('Update API by id')
})

// delete
router.delete('/delete/:id', (req, res) => {
    res.send('Delete API by id')
})

console.log('api setup success')

module.exports = router
