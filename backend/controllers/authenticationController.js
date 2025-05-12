import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) {
    return res.status(400).json({ msg: "No token, Authorization denied" });
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Authorization middleware for admin role
export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied, admin role required' });
  }
  next();
};
