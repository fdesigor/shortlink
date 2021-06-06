const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Link = require('../models/Link')
const Count = require('../models/Count')

const connection = new Sequelize(dbConfig);

Link.init(connection);
Count.init(connection);

module.exports = connection;