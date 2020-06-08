const Process = require('../database/models/Process');
module.exports = {
    async index(req, res) {
        const processes = await Process.findAll();

        return res.json(processes);
    }
};