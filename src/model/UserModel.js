const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    authkey: {type: String} /* Será atribuida depois da criação... */

});

module.exports = mongoose.model('User', TaskSchema);