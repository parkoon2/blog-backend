import jwt from 'jsonwebtoken';
import constants from 'Config/constants';

export function createToken(user = {}) {
  let u = JSON.parse(JSON.stringify(user));
  const option = {
    expiresIn: '5m',
  };

  return new Promise((resolve, reject) => {
    try {
      let token = jwt.sign(u, constants.JWT_SECRET, option);
      resolve(token);
    } catch (err) {
      reject(err);
    }
  });
}

export function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'] || req.query.token;

  if (!token) {
    return res.status(400).json({ message: 'Token is not provided' });
  }

  try {
    const decoded = jwt.verify(token, constants.JWT_SECRET);

    if (!decoded) {
      return res.status(400).json({ message: 'Token you provided is invalid' });
    }

    // 필요하면 decoded에서 user id를 찾고 req에 저장하고 next()
    // req.user = { id: decoded.userId}
    next();
  } catch (err) {
    return res.status(400).json(JSON.stringify(err));
  }
}
