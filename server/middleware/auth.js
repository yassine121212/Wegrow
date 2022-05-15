const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const autheader = req.headers["authorization"]
    const token =autheader && autheader.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWTPRIVATEKEY);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};