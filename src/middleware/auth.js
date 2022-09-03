const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, String(process.env.SECRET));
        req.token = decoded;

        next();
    } catch (err) {
        res.status(401).json({
            status: "failed",
            message: "Unauthenticated",
        })
    }
};

module.exports = auth;