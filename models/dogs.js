"use strict";

module.exports = (sequelize, DataTypes) => {
    const dogs = sequelize.define('dogs_table', {
        breed: {
            type: DataTypes.STRING
        },
        height: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.INTEGER
        },
        size: {
            type: DataTypes.STRING
        },
        child_friendly: {
            type: DataTypes.STRING
        },
        energy_level: {
            type: DataTypes.INTEGER
        }
    });
    // users.associate = models => users.hasOne(models.loans,{foreignKey: "book_id"})
    return dogs;
}

