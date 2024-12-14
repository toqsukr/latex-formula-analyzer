export type UploadImageProp = {
  onSuccess: (formulas: string[]) => void
  mutationKey?: string
  onError?: () => void
}
