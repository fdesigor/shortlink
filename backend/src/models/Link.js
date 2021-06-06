const { Model, DataTypes } = require('sequelize');

class Link extends Model {
    static init(sequelize) {
        super.init({
            link: DataTypes.STRING,
            shortlink: DataTypes.STRING
        }, {
            scopes: {
                counts() {
                    return 1
                },
            },
            sequelize
        })
    }

    // static associate(models) {
    //     this.hasMany(models.Count, { foreignKey: 'count_id', as: 'counts' })
    // }
}

module.exports = Link;