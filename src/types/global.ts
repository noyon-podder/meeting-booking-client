export type TUser = {
  email: string;
  password: string;
  userId: string;
  iat: number;
  exp: number;
  role: "user" | "admin";
};
