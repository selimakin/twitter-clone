export enum StatusType {
  SUCCESS = "success",
  FAIL = "fail",
  ERROR = "error",
}

export interface ErrorType {
  status: StatusType.FAIL | StatusType.ERROR;
  message: string;
}
