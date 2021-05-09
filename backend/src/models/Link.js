const { Model, DataTypes } = require('sequelize');

class Link extends Model {
    static init(sequelize) {
        super.init({
            link: DataTypes.STRING,
            shortlink: DataTypes.STRING,
            count: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Link;