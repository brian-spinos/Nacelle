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
