import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token || req.header("authorization");
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.payload);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Token is not valid", error: error.message });
  }
};

export default authMiddleware;
