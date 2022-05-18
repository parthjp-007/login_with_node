const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String, required: true, unique: true
    },
    password :{
        type: String, required: true 
    }
})

const login = new mongoose.model("login", schema);

module.exports = login;

