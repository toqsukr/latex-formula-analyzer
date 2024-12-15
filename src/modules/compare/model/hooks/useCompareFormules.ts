import { MutationKeys } from "@modules/app/constants"
import { CompareRequest, CompareResponse } from "@modules/compare/type"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import compareService from "../../service"

/**
 * Хук для обработки запроса сравнени формул через react-query
 *
 * @param mutationKey Ключ для управления запросом
 * @returns
 * compareFormules - функция отправки запроса
 * isFormulesComparing - флаг статуса запроса
 */

export const useCompareFormules = (mutationKey?: string) => {
  const { mutateAsync: compareFormules, isPending: isFormulesComparing } =
    useMutation<CompareResponse, AxiosError, CompareRequest, unknown>({
      mutationKey: [MutationKeys.COMPARE_FORMULES, mutationKey],
      mutationFn: async (request: CompareRequest) => {
        return compareService.compareFormules(request).then(({ data }) => data)
      },
    })

  return { compareFormules, isFormulesComparing }
}
