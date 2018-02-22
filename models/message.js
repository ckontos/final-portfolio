module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
        name: {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });
    return Message;
};
