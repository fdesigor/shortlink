const routes = require("express").Router();

const LinkController = require("./controllers/LinkController");

routes.get('/', LinkController.index)
routes.post('/', LinkController.store)
routes.get('/:link', LinkController.redirect)

module.exports = routes;