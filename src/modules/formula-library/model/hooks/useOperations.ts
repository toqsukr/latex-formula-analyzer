import { QueryKeys } from "@modules/app/constants"
import { useQuery } from "@tanstack/react-query"
import operationService from "../../service"

export const useOperations = () => {
  return useQuery({
    queryKey: [QueryKeys.GET_OPERATIONS],
    queryFn: async () =>
      operationService.getOperations().then(({ data }) => data),
  })
}
