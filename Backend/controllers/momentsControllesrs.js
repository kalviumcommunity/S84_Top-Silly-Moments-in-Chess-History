const express = require('express');
const Moment = require('../models/Moment');
const app = express();

app.use(express.json())

app.post('/api/moments', async(req, res) => {
    try{
        const {title, description, imageUrl, videoUrl, date} = req.body;

        if (!title || (!imageUrl && !videoUrl )){
            return res.status(400).json({message: `Title, ImageUrl, VideoUrl is required`})
        }
        const newMoment = new Moment({title, description, imageUrl, videoUrl, date});
        await newMoment.save();

        res.status(201).json({message: `Created successfully`, moment: newMoment})

    }catch(err){
        res.status(500).json({message: `Bad request`})
    }
});

app.get('/api/moments', async(req, res) => {
    try{
        const mom = await Moment.find();
        res.json(mom);
    }catch(err){
        console.log(`You are facing and error ${err}`);
    }
});

app.get('/api/moments/:id', async(req, res) => {
    try{
        const idMoment = await Moment.findById(req.params.id);

        if (!idMoment){
            return res.status(404).json({message: `Error 404 Moment not found!`})
        }
        res.json(idMoment);

    }catch(err){
        res.status(400).json({message: `Bad request`, err})
    }
});

app.put('/api/moments/:id', async(req, res) => {
    try{
        const {title, description, imageUrl, videoUrl, date} = req.body;

        const updateMoment = await Moment.findByIdAndUpdate(req.params.id, {title, description, imageUrl, videoUrl, date},{new: true}) 

        if(!updateMoment){
            return res.status(404).json({message: `Moment not found`});
        }

        res.status(200).json({message: `Updated Successfully`, moment: updateMoment})

    }catch(err){
        return res.status(500).json({message: `Internal server error`})
    }
}) 

app.delete('/api/moments/:id', async(req, res) => {
    try{    
        const delMoment = await Moment.findByIdAndDelete(req.params.id);

        if (!delMoment){
            return res.status(404).json({message: `Moment not found`});
        }
        res.status(200).json({message: "Moment deleted successfully"})


    }catch(err){
        res.status(500).json({message: `Internal server error`})
    }
})

module.exports = app