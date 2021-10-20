const mongoose = require('mongoose');
/* Importao o mongoose, lib para acessarmos nosso banco de dados. */

const url = 'mongodb://';
/* A url gerada pelo nosso banco de dados. */

mongoose.connect(url, {usernewUrlParser: true});

module.exports = mongoose;