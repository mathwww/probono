const bcrypt = require('bcryptjs');
const User = require('../database/models/User');
const Role = require('../database/models/Role');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'b1GrG9nVmBLKDWDYCDsJuA4MFN8ezKYD';

module.exports = {
    async create(req, res) {
        const {email, password } = req.body;

        let user = await User.findOne({attributes: ['name', 'password'],where: {email}, include: [{model: Role, as: 'roles', attributes: ['role']}]});

        if(!user) {
            return res.status(401).json('User does not exist');
        }

        if(!bcrypt.compareSync(password, user.password)){
            return res.status(401).json('Wrong email or password');
        }

        user = await User.findOne({attributes: ['name'],where: {email}, include: [{model: Role, as: 'roles', attributes: ['role']}]});

        const accessToken = jwt.sign({ username: user.name,  role: user.roles.role}, accessTokenSecret, { expiresIn: '20m' });

        const message = {accessToken, user};

        return res.json(message);

    }
};