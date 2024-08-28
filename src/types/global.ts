export type TUser = {
  email: string;
  password: string;
  userId: string;
  iat: number;
  exp: number;
  role: "user" | "admin";
};

export type TRoom = {
  _id: string;
  name: string;
  description: string;
  capacity: number;
  pricePerSlot: number;
  images: string[];
  amenities: string[]; // List of amenities like 'Projector', 'Whiteboard', etc.
};
