const Link = require('../models/Link')

module.exports = {
    async index(req, res) {
        res.json({ Hello: 'World!' }, 200)
    },

    async store(req, res) {
        const { url } = req.body
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const result = [];

        for (let i = 0; i < 6; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        }

        res.json({ link: url, shortlink: result.join(''), count: 0 }, 201)
    },

    async redirect(req, res) {
        res.json({ Hello: 'Redirect!' }, 200)
    },
}