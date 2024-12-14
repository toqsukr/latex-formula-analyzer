import { create } from "zustand"
import { ActiveFieldStore, FieldKeys } from "./type.d"

export const useActiveField = create<ActiveFieldStore>((set, get) => ({
  fieldKey: FieldKeys.FIRST,
  setFieldKey: (key) => set({ ...get(), fieldKey: key }),
}))
