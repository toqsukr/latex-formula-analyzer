import { MutationKeys } from "@modules/app/constants"
import { ExtractResponse } from "@modules/latex-extract/type"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import extractService from "../../service"

export const useUploadImage = (mutationKey?: string) => {
  const { mutateAsync: uploadImage, isPending: isImageUploading } = useMutation<
    ExtractResponse,
    AxiosError,
    Blob,
    unknown
  >({
    mutationKey: [MutationKeys.UPLOAD_IMAGE, mutationKey],
    mutationFn: async (file: Blob) => {
      return extractService.extractImageToLatex(file).then(({ data }) => data)
    },
  })

  return { uploadImage, isImageUploading }
}
