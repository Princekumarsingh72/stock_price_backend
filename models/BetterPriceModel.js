import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const BetterPrice = sequelize.define(
    "better_price",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        targetPrice:{
            type: DataTypes.STRING,
            allowNull:true
        }
    },
    {
        timestamps: true,
    }
);

export default BetterPrice;
