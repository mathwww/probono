const Process = require('../database/models/Process');
const Progress = require('../database/models/Progress');
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
    },

    async add(req, res) {
        const {id} = req.params;
        const { description, publicationDate, publicationTime} = req.body;

        const progress = await Progress.create({description, publicationDate, publicationTime, processId: id});
        if(!progress){
            return res.status(400).json('Progress not registered !');
        }
        return res.json('Progress successfully registered');
    }
};