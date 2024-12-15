export const HOST_URL = "http://localhost:5000/"
// "http://94.228.115.216:5000"

export enum Routes {
  COMPARE = "/compare",
}

export enum MutationKeys {
  UPLOAD_IMAGE = "upload-image",
  COMPARE_FORMULES = "compare-formules",
}

export enum QueryKeys {
  GET_OPERATIONS = "get-operations",
}

export enum NotificationCodes {
  SUCCESS_COPY = "success-clipboard",
  COMPARE_RESULT = "compare-result",
  NO_COMPARE_DATA_ERROR = "no-compare-data-error",
}

export enum StorageKeys {
  TIP_TRIP = "latex-tip-trip",
}
