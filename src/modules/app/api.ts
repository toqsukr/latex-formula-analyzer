import { QueryClient } from "@tanstack/react-query"
import { isAxiosError } from "axios"
import { handleErrorThunk } from "./model/handle-error"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
      throwOnError: (error) => {
        setTimeout(
          () =>
            handleErrorThunk(
              isAxiosError(error) ? error.response?.data ?? error : error
            ),
          0
        )
        return false
      },
    },
    queries: {
      staleTime: Infinity,
      throwOnError: (error) => {
        setTimeout(
          () =>
            handleErrorThunk(
              isAxiosError(error) ? error.response?.data ?? error : error
            ),
          0
        )
        return false
      },
    },
  },
})
