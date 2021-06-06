const routes = require("express").Router();

const LinkController = require("./controllers/LinkController");

routes.get('/', LinkController.index)
routes.post('/', LinkController.store)
routes.get('/:code', LinkController.redirect)
routes.get('/:code/count', LinkController.count)

module.exports = routes;