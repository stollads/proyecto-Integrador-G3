module.exports = (sequelize, DataTypes) => {
    let alias = 'Compra'
    let cols = {
        idCompra: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idUser: {
            type: DataTypes.STRING,
            foreingKey: true,
        },
        idProduct: {
            type: DataTypes.STRING,
            foreingKey: true,
        },
        fechaCompra: {
            type: DataTypes.STRING,
            createdAt: DataTypes.DATE
        },
    }
    let config = {
        tableName: 'compra',
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    }
    let Product = sequelize.define(alias, cols, config)
    /* Product.associate = function (models) {
        Product.belongsToMany(models.User, {
            as: 'products',
            as: 'users',
            foreingKey: 'idProduct',
            otherKey: "idUsers",
            through: "Cartproduct"
        })
    } */
    return Product
}