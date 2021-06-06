const { Model, DataTypes } = require('sequelize');

class Link extends Model {
    static init(sequelize) {
        super.init({
            link: DataTypes.STRING,
            shortlink: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.Count, { foreignKey: 'link_id', as: 'counts' });
    }
}

module.exports = Link;