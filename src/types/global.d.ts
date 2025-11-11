export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
  error?: string;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
