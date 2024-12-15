import { create } from "zustand"
import { ActiveFieldStore, CompareResult, FieldKeys } from "./type.d"

// Хранилище активного поля (на которое указывает стрелка)
export const useActiveField = create<ActiveFieldStore>((set, get) => ({
  fieldKey: FieldKeys.FIRST,
  setFieldKey: (key) => set({ ...get(), fieldKey: key }),
}))

// Хранилище результата сравнения формул
export const useCompareResult = create<CompareResult>((set, get) => ({
  result: "Здесь \\ будет \\ отображаться \\ результат \\ сравнения \\ формул!",
  setResult: (result) => set({ ...get(), result }),
}))
