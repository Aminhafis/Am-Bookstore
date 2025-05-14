// backend/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import userModel from '../model/userModel.js';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // payload will include user id and role
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user.id);

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    next();
  } catch (err) {
    return res.status(500).json({ error: 'Server error during admin check' });
  }
};
