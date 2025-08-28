/*import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Attach userId to req object instead of req.body
        req.userId = token_decode.id;

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
};

export default authUser;*/

import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Attach userId directly to req object
        req.userId = token_decode.id;

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
};

export default authUser;