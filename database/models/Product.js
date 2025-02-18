module.exports = (sequelize, DataTypes) => {
    let alias = 'Products'
    let cols = {
        idProduct: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        discount: {
            type: DataTypes.INTEGER,
        },

        category: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    }
    let config = {
        tableName: 'products',
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