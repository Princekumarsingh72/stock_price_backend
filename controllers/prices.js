
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname because ESM does NOT support it normally
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON file safely using fs instead of import
const priceJsonPath = path.join(__dirname, "../price.json");
const priceJson = JSON.parse(fs.readFileSync(priceJsonPath, "utf8"));

export const getPricesFromOtherService = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: priceJson,
      message: "Data fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong!",
    });
  }
};

