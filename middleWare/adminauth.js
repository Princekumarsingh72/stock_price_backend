// import jwt from "jsonwebtoken";

// export default function adminAuth(req, res, next) {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token)
//     return res.status(401).json({ success: false, message: "No token provided" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.admin = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ success: false, message: "Invalid token" });
//   }
// }
