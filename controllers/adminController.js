// import Admin from "../models/AdminModel.js";
// import jwt from "jsonwebtoken";

// export const adminLogin = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const admin = await Admin.findOne({ where: { username } });

//     if (!admin)
//       return res.status(404).json({ success: false, message: "Admin not found" });

//     // Password match (plain text)
//     if (admin.password !== password)
//       return res.status(400).json({ success: false, message: "Invalid password" });

//     const token = jwt.sign(
//       { id: admin.id, username: admin.username },
//       process.env.JWT_SECRET
//     );

//     res.json({ success: true, token });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
