import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
  console.log(jwtDecode(token));

  return jwtDecode(token);
};
