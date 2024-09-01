export type TUser = {
  email: string;
  password: string;
  userId: string;
  iat: number;
  exp: number;
  role: "user" | "admin";
};

export type TUserInfo = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
};

// export type TRoom = {
//   _id: string;
//   name: string;
//   capacity: number;
//   pricePerSlot: number;
//   images: string[];
//   amenities: string[];
// };

export type TRoom = {
  _id: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  images: string[];
  amenities: string[];
  isDeleted: boolean;
  __v: number;
};

export type TGetRoomsParams = {
  searchTerm?: string;
  minCapacity?: number;
  maxCapacity?: number;
  minPrice?: number;
  maxPrice?: number;
  sort?: "priceAsc" | "priceDesc";
};

export type OptionType = {
  value: string;
  label: string;
};
