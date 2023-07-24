const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class comment extends Model { }

comment.init(
    {
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },


        date_created: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },


        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },


        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: "post",
                key: "id"
            }
        }
    },

    {
        sequelize,
        modelName: "comment",
        freezeTableName: true,
        underscored: true,
        deletedAt: true
    }
);

module.exports = comment;