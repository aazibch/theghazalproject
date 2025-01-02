import jwt from 'jsonwebtoken';

export const generateJwtToken = (payload: Record<string, any>) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: '1h'
  });

  return token;
};
