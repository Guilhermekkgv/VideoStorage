export interface Video {
  id: number;
  name: string;
  title?: string;
  type: string;
  size: number;
  lastModified: number;
  data: ArrayBuffer;
  thumbnail: string;
  duration: string;
  uploadedAt: string;
}

export interface AuthState {
  isAuthenticated: boolean;
}