import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: 'Authorization header missing or malformed'})
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; //attaching decoded payload (userId, mail etc)
        next();
    }
    catch(err) {
        return res.status(401).json({message: 'Invalid or expired token'});
    }
};

export default verifyToken;