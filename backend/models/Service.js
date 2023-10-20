const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    _id: {
        type: mongoose.Schema.ObjectId
    }
}, 
{timestamps: true}// controle de data de criação e atualização
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};

