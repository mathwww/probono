const {Model, DataTypes} = require('sequelize');

class Progress extends Model {
    static init (sequelize) {
        super.init({
            description: DataTypes.TEXT,
            publicationDate: DataTypes.DATEONLY,
            publicationTime: DataTypes.TIME
        },{
            sequelize,
            modelName: 'progresses'
        })
    }

    // static associate(models) {
    //     this.belongsTo(models.Process, {foreignKey: 'processId'});
    // }
}

module.exports = Progress;