import { InputProps } from "@mui/material"
import { EditableMathFieldProps } from "react-mathquill"

export type EditableLatexFieldProp = {
  onSwapClick: () => void
} & (RawProps | LatexProps)

export type LatexProps = EditableMathFieldProps & {
  mode: "latex"
}

export type RawProps = InputProps & {
  mode: "raw"
}
