import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dialect: "mysql",
};

const sequelize = new Sequelize(
  dbConfig?.dbName,
  dbConfig?.dbUser,
  dbConfig?.dbPassword,
  {
    host: dbConfig?.dbHost,
    dialect: dbConfig?.dialect,
    define: {
      timestamps: true,
    },
    // logging: true,
  }
);

export { sequelize };

export async function connectDB() {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();

    console.log("✅ Connection has been established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
}