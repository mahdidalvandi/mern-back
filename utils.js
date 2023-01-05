import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    `${process.env.JWT_SECRET_KEY}`,
    {
      expiresIn: "30d",
    }
  );
};
export const getError = (req, res, error) => {
  res.send({
    item: "OPS",
    message: error,
  });
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(5, authorization.length); // DIGI XXXXXX = 5
    jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};
