const Offre = require('../models/offresModel')
const mongoose = require('mongoose')

// get all offers
const getOffers = async (req, res) => {
    const offers = await Offre.find({}).sort({createdAt: -1})

    res.status(200).json(offers)
}


// get a single offer
const getOffer = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Cant find the offer"})
    }

    const offre = await Offre.findById(id)

    if (!offre) {
        return res.status(404).json({error: "Cant find the offer"})
    }

    res.status(200).json(offre)
}


// create a offer
const createOffer = async(req, res) => {
    const { title, description, contactEmail, contactPhone } = req.body;
    
    if (!title || !description || !contactEmail || !contactPhone) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // add to DB
    try {
        const newOffre = await Offre.create({ title, description, contactEmail, contactPhone });
        res.status(200).json(newOffre);
    } catch (error) {
        res.status(400).json({ error: error.message });
    } 
}



//delete a offer
const deleteOffer = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Cant find the offer'})
    }

    const offre = await Offre.findOneAndDelete({_id: id})

    if (!offre) {
        return res.status(404).json({error: "Cant find the offer"})
    }

    res.status(200).json(offre)
     
}

module.exports = {
    getOffers,
    getOffer,
    createOffer,
    deleteOffer

}


