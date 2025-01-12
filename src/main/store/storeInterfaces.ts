export interface SeachState {
  query: string;
  results: SearchResult[];
  value: number;
  searchData: SearchResult[];
  isLoading: boolean;
  error: string;
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
}

export enum CATEGORIES {
  FRUITS = "fruits",
  VEGETABLES = "vegetables",
  SNACK = "snack",
}

// Notifications

export enum NotificationTypes {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
}

export type notificationType = "success" | "error" | "info";

export interface Notification {
  id: string;
  message: string;
  type: notificationType;
}

export interface NotificationState {
  notifications: Notification[];
}
