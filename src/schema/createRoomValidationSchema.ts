import { z } from "zod";

const createRoomValidationSchema = z.object({
  name: z.string().min(1, "Room Name is required"),
  roomNo: z.coerce
    .number({
      required_error: "Room Number is required",
      invalid_type_error: "Room Number must be a number",
    })
    .int()
    .positive()
    .min(1, { message: "Calories should be at least 1" }),

  capacity: z.coerce
    .number({
      required_error: "Capacity is required",
      invalid_type_error: "Capacity must be a number",
    })
    .int()
    .positive()
    .min(1, { message: "Calories should be at least 1" }),

  floorNo: z.coerce
    .number({
      required_error: "Flor No is required",
      invalid_type_error: "Flor No must be a number",
    })
    .int()
    .positive()
    .min(1, { message: "Floor No should be at least 1" }),
  pricePerSlot: z.coerce
    .number({
      required_error: "Flor No is required",
      invalid_type_error: "Flor No must be a number",
    })
    .int()
    .positive()
    .min(1, { message: "Floor No should be at least 1" }),
});

export default createRoomValidationSchema;
