import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  const token = jwt.sign({ id }, process.env.SECRET_KEY as string, {
    expiresIn: "30d",
  });
  return token;
};

export default generateToken;