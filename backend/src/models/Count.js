const { Model, DataTypes } = require('sequelize');

class Count extends Model {
    static init(sequelize) {
        super.init({
            link_id: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Link, { foreignKey: 'link_id', as: 'link' })
    }
}

module.exports = Count;