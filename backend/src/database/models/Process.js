const {Model, DataTypes} = require('sequelize');

class Process  extends Model {
    static init (sequelize) {
        super.init({
            processNumber: DataTypes.STRING(20),
            cpfClient: DataTypes.STRING(11)
        },{
            sequelize,
            modelName: 'processes'
        })
    }

    static associate(models) {
        this.hasMany(models.Progress, {foreignKey: 'processId', as: 'progresses'});
    }
}

module.exports = Process;