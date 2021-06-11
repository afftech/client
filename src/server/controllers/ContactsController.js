const { User } = require('../models')
module.exports = {
    async get_all_contacts(req, res) {
        try {
            const contacts = await User.findAll()
            res.send(contacts)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in'
            })
        }
    },
    async post(req, res) {
        try {
            const contact = await User.create(req.body)
            res.send(contact)
        } catch (err) {
            res.status(501).send({
                error: 'An error has occured trying to log in'
            })
        }
    }
}