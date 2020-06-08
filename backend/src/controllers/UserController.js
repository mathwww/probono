const User = require('../database/models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res){
        const {name, email, password, cpf, roleId} = req.body;

        if(!module.exports.validateCPF(cpf)) {
            return res.status(400).json('CPF is not a valid one !');
        }

        let user = await User.findByPk(cpf);
        if(user){
            return res.status(409).json('User already exists');
        }

        const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        user = await User.create({name, email, password: hash, cpf, roleId});

        return res.json('User Successfully created');
    },

    async list(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    validateCPF(cpf) {		
        if(cpf == '') return false;	
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 || 
            cpf == "00000000000" || 
            cpf == "11111111111" || 
            cpf == "22222222222" || 
            cpf == "33333333333" || 
            cpf == "44444444444" || 
            cpf == "55555555555" || 
            cpf == "66666666666" || 
            cpf == "77777777777" || 
            cpf == "88888888888" || 
            cpf == "99999999999"){
                return false;	
            }	
            numeros = cpf.substring(0,9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--) {
                    soma += numeros.charAt(10 - i) * i;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0)){
                    return false;
            }
            numeros = cpf.substring(0,10);
            soma = 0;
            for (i = 11; i > 1; i--){
                    soma += numeros.charAt(11 - i) * i;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1)){
                    return false;
            }
            return true;
    }
};