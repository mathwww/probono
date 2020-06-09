const Process = require('../database/models/Process');
module.exports = {
    async index(req, res) {
        const processes = await Process.findAll();

        return res.json(processes);
    },

    async create(req, res) {
        const {processNumber, cpfClient} = req.body;

        const process = await Process.create({processNumber, cpfClient});

        if(!process) {
            return res.status(400).json('This process already exists !');
        }

        return res.json('Process created successfully');
    }
};