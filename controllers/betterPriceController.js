import BetterPrice from "../models/BetterPriceModel.js";


export const submitBetterPrice = async (req, res) => {
    try {
        const { name, email, phone,targetPrice } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).json({ success: false, message: "All fields are required!" })
        }

        const payload = {
            name,
            email,
            phone,
            targetPrice
        }

        const user = await BetterPrice.create(payload);
        return res.status(201).json({ success: true, message: "Request submitted successfully", data: user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getBetterPrice = async (_req, res) => {
    try {
        const users = await BetterPrice.findAll({ order: [["id", "DESC"]] });
        if (!users) {
            return res.status(404).json({ success: false, message: "Request user not found!" });
        }
        return res.status(200).json({ success: true, data: users, message: "Request user fetched succesfully!" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
