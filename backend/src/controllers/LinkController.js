const Count = require('../models/Count')
const Link = require('../models/Link')

module.exports = {
    async index(req, res) {
        const items = await Link.findAll()

        if (!items)
            res.status(404).json({})

        res.status(200).json(items)
    },

    async store(req, res) {
        const { url } = req.body
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const result = [];

        for (let i = 0; i < 6; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        }

        try {
            await Link.create({ link: url, shortlink: result.join('') })
                .then(item => {
                    return res.status(201).json(item)
                })
                .catch(error => {
                    return res.status(400).json(error)
                });
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    async redirect(req, res) {
        const { code } = req.params

        const item = await Link.findOne({
            where: { shortlink: code },
        })

        if (!item)
            res.status(404).json({})

        try {
            await Count.create({ link_id: item.id });
        } catch (error) {
            return res.status(500).json(error)
        }

        res.redirect(item.link)
    },

    async count(req, res) {
        const { code } = req.params

        const item = await Link.findOne({
            where: { shortlink: code },
            include: ['counts']
        })

        if (!item)
            res.status(404).json({})

        res.status(200).json({ count: item.counts.length })
    },
}