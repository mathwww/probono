const {Model, DataTypes} = require('sequelize');

class Role  extends Model {
    static init (sequelize) {
        super.init({
            role: DataTypes.ENUM('ADMIN', 'LAWYER', 'CLIENT', 'USER'),
        },{
            sequelize,
            modelName: 'roles'
        })
    }

    // static associate(models) {
    //     this.belongsTo(models.Role, {foreignKey: 'roleId', as: 'users'});
    // }
}

module.exports = Role;