'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrewerySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    create: {
        type: Date, default: Date.now
    }
    ,
    update: {
        type: Date, default: Date.now
    }
})

module.exports = mongoose.model('Brewery', BrewerySchema);