const jwt = require('jsonwebtoken');
const UserSchema = require('../models/UserSchema');

const authenticate = async(req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({message: "No token provided"});
    }

    const token = authHeader.split(" ")[1];
    try{
        const decoded = jwt.verify(token, "guleria");
        const user = await UserSchema.findById(decoded.userId)

        if (!user) return res.status(401).json({ message: "User not found" });

        req.user = {
            userId: user._id,
            isAdmin: user.isAdmin
        }
        next();
    }catch(err){
        res.status(401).json({message: `Invalid or Expired token`})
    }
}

const verifyAdmin = (req, res, next) => {
    console.log('User Admin Status:', req.user?.isAdmin);  // Log admin status

    if (!req.user || !req.user.isAdmin){
        return res.status(403).json({message: `Admins Only!`})
    }
    next();
}

module.exports = {authenticate, verifyAdmin};