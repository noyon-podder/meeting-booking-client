import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
  // .regex(/[A-Z]/, {
  //   message: "Password must contain at least one uppercase letter",
  // })
  // .regex(/[a-z]/, {
  //   message: "Password must contain at least one lowercase letter",
  // })
  // .regex(/[0-9]/, { message: "Password must contain at least one number" })
  // .regex(/[^A-Za-z0-9]/, {
  //   message: "Password must contain at least one special character",
  // })
  phoneNumber: z
    .string({ required_error: "Phone Number is required" })
    .min(10, { message: "Phone Number must be at least 10 digits" })
    .max(15, { message: "Phone Number must be less than 15 digits" })
    .regex(/^\d+$/, { message: "Phone Number must only contain digits" }),
  address: z
    .string({ required_error: "Address is required" })
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(100, { message: "Address must be less than 100 characters" }),
});

export default registerSchema;
