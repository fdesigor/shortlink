const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Link = require('../models/Link')

const connection = new Sequelize(dbConfig);

Link.init(connection);

module.exports = connection;