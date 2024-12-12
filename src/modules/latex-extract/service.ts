import axios, { HttpStatusCode } from "axios"
import { HOST_URL } from "../app/constants"

class ExtractService {
  async extractImageToLatex(file: Blob) {
    const formData = new FormData()
    formData.append(`file`, file)
    return await axios.post<FormData>(`${HOST_URL}/api/pix2tex`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }

  async getImage(URL: string) {
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
    })
    if (response.status !== HttpStatusCode.Ok)
      throw new Error("Failed to fetch image!")
    return await response.blob()
  }
}

export default new ExtractService()
