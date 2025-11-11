import { LoginCredentials, RegisterCredentials, AuthResponse } from "../types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "/api";

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  async logout(): Promise<void> {
    await fetch(`${API_BASE}/auth/logout`, { method: "POST" });
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth-token");
    }
  },

  async refreshToken(): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE}/auth/refresh`, {
      method: "POST",
    });
    return response.json();
  },

  async getProfile(): Promise<AuthResponse["user"]> {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth-token") : null;
    const response = await fetch(`${API_BASE}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },

  async updateProfile(
    data: Partial<AuthResponse["user"]>
  ): Promise<AuthResponse["user"]> {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth-token") : null;
    const response = await fetch(`${API_BASE}/auth/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
