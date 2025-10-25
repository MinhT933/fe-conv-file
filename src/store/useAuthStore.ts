import { useState, useEffect } from "react";
import { User } from "@/features/auth/types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Simple state management without external dependencies
class AuthStore {
  private state: AuthState = {
    user: null,
    isAuthenticated: false,
  };

  private listeners: (() => void)[] = [];

  getState = () => this.state;

  setUser = (user: User) => {
    this.state = { user, isAuthenticated: true };
    this.notify();
  };

  clearUser = () => {
    this.state = { user: null, isAuthenticated: false };
    this.notify();
  };

  subscribe = (listener: () => void) => {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  private readonly notify = () => {
    for (const listener of this.listeners) {
      listener();
    }
  };
}

export const authStore = new AuthStore();

// Hook for React components
export const useAuthStore = () => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    return authStore.subscribe(() => forceUpdate({}));
  }, []);

  return {
    ...authStore.getState(),
    setUser: authStore.setUser,
    clearUser: authStore.clearUser,
  };
};
