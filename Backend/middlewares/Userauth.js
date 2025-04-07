const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startWith("bearer")) {
    return res.json(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "guleria");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: `Invalid or Expired token` });
  }
};

module.exports = authenticate;
