const verifyAdmin = (req, res, next) => {
  console.log("Role-", req.role);
  if (req.role !== "admin") {
    return res.status(403).send({
      success: false,
      message: "You are not authorize to perform this action",
    });
  }
  next();
};

module.exports = verifyAdmin;
