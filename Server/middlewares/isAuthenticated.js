import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];  // Check token from cookies or Authorization header
    // console.log(`Token ${token}`)
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated.",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token:", 
      JSON.stringify(decoded, null, 2);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decoded.id;
    // console.log(`Is Authentication :- ${req.id}`)
    next();
  } catch (error) {
    // console.log("Auth Error:", error);
    return res.status(401).json({
      message: "Invalid token",
      success: false,
    });
  }
};

export default isAuthenticated;
