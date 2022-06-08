module.exports = (sequelize, DataTypes) => {
    let alias = 'Users'
    let cols = {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING(250),
        },
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }
    let Product = sequelize.define(alias, cols, config)
    /* Product.associate = function (models) {
        Product.belongsToMany(models.User, {
            as: 'carts_user',
            foreingKey: 'product_id',
            otherKey: "user_id",
            through: "Cartproduct"
        })
    } */
    return Product
}