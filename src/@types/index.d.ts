export interface ErrorMessage {
  code: string;
  message: string;
}

export interface Pagination<T> {
  items: Array<T>;
  pageIndex: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
}

export interface DataResponse<T> {
  data: T[];
  success: boolean;
  errorMessage: ErrorMessage;
}

export type PaginationResponse<T> = DataResponse<Pagination<T>>;

export interface ErrorResponse {
  success: boolean;
  errorMessage: ErrorMessage;
}

export interface DefaultRequest {
  pageIndex?: number;
  pageSize?: number;
  retries?: number;
}
