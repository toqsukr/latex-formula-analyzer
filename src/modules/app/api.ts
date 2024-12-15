import { QueryClient } from "@tanstack/react-query"
import { isAxiosError } from "axios"
import { handleErrorThunk } from "./model/handle-error"

/**
 * Настройка query client всего для приложения
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
      throwOnError: false,
      onError: (error) => {
        handleErrorThunk(
          isAxiosError(error) ? error.response?.data ?? error : error
        )
      },
    },
  },
})
