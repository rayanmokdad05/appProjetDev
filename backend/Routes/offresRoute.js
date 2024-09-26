const express = require("express");
const {
    createOffer,
    getOffers,
    getOffer,
    deleteOffer
} = require('../controllers/offreController')

const router = express.Router();


// GET all offers
router.get("/",getOffers)

// GET one offer 
router.get('/:id',getOffer)

// POST a new offer
router.post('/', createOffer)

// DELETE an offer
router.delete('/:id', deleteOffer)


module.exports = router;
