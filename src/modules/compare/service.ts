import { HOST_URL } from "@modules/app/constants"
import axios, { AxiosResponse } from "axios"
import { CompareRequest, CompareResponse } from "./type"

class CompareService {
  async compareFormules(data: CompareRequest) {
    return await axios.post<CompareRequest, AxiosResponse<CompareResponse>>(
      `${HOST_URL}/api/compare`,
      { ...data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
}

export default new CompareService()
