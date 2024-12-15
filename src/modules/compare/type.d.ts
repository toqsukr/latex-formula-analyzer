export type CompareResponse = CompareRequest & {
  similarity: string
}
export type CompareRequest = {
  latex1: string
  latex2: string
}

export type ActiveFieldStore = {
  fieldKey: FieldKeys
  setFieldKey: (key: FieldKeys) => void
}

export enum FieldKeys {
  FIRST = "first-field",
  SECOND = "second-field",
}

export type CompareResult = {
  result: string
  setResult: (result: string) => void
}
