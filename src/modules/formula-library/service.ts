import { HOST_URL } from "@modules/app/constants"
import axios from "axios"
import { OperationResponse } from "./type"

class OperationService {
  async getOperations() {
    return await axios.get<OperationResponse>(`${HOST_URL}/api/operations`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export default new OperationService()
