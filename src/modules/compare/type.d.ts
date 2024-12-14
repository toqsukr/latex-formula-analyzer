export type CompareResponse = CompareRequest & {
  similarity: string
}
export type CompareRequest = {
  latex1: string
  latex2: string
}
