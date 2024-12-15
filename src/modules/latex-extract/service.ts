import axios, { AxiosResponse } from "axios"
import { HOST_URL } from "../app/constants"
import { ExtractResponse } from "./type"

/**
 * Сервис для отправки запроса на преобразования фото в latex-формат
 */
class ExtractService {
  async extractImageToLatex(file: Blob) {
    const formData = new FormData()
    formData.append(`file`, file)
    return await axios.post<FormData, AxiosResponse<ExtractResponse>>(
      `${HOST_URL}/api/pix2tex`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
  }
}

export default new ExtractService()
