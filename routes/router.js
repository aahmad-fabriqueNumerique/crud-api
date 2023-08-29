const express = require('express')
const route = express.Router();

const CarModel = require('../models/model.js');

route.get('/', (req, res) => {
    res.send('hello')
})

route.get('/carlist', async (req, res) => {
    try {
        const carlist = await CarModel.find({})
        res.status(200).json(carlist)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

route.get('/car/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const carID = await CarModel.findById(id)
        res.status(200).json(carID)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})


route.post('/cars', async (req, res) => {
    try {
        const cars = await CarModel.create(req.body)
        res.status(200).json(cars)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})


route.put('/car/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const carUpdate = await CarModel.findByIdAndUpdate(id, req.body)
        if(!carUpdate) {
            return res.status(404).json({
                message: `cannot find car with id : ${id}`
            })
        }
        res.status(200).json(carUpdate)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})


route.delete('/car/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const carDelete = await CarModel.findByIdAndDelete(id, req.body)
        if(!carDelete) {
            return res.status(404).json({
                message: `cannot find car with id : ${id}`
            })
        }
        res.status(200).json(carDelete)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = route