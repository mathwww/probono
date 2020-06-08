const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init (sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            cpf: {
                type: DataTypes.STRING(11),
                primaryKey: true
            },
            roleId:  {
               type: DataTypes.INTEGER,
               references: {
                model: 'roles',
                key: 'id',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
              }
            }
        },{
            sequelize,
            modelName: 'users'
        })
    }

    // static associate(models) {
    //     this.hasOne(models.Role, {foreignKey: 'roleId', as: 'roles'});
    // }
}

module.exports = User;