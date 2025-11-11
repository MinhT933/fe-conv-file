export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile
  extends Omit<User, "id" | "createdAt" | "updatedAt"> {
  bio?: string;
  phone?: string;
  location?: string;
}

export interface UpdateUserData {
  name?: string;
  bio?: string;
  phone?: string;
  location?: string;
  avatar?: string;
}
