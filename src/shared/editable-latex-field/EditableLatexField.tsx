import { Input } from "@mui/material"
import SwapIcon from "@shared/ui/SwapIcon"
import { FC } from "react"
import { EditableMathField } from "react-mathquill"
import css from "./EditableLatexField.module.scss"
import { EditableLatexFieldProp } from "./EditableLatexField.type"

/**
 * Компонент для определения строки ввода в зависимости от мода
 *
 * Определяет параметр ввода (в исходном latex виде или в красивом формате)
 *
 * @param children дочерние элементы
 */
const EditableLatexField: FC<EditableLatexFieldProp> = ({
  onSwapClick,
  ...props
}) => {
  return (
    <div className="relative w-full h-full">
      {props.mode === "latex" ? (
        <EditableMathField {...props} />
      ) : (
        <Input
          sx={{
            width: "100%",
            height: "100%",
            fontSize: "2.5rem",
            paddingInline: "1.5rem",
            color: "white",
            outline: "transparent",
          }}
          {...props}
        />
      )}
      <SwapIcon className={css.swap} onClick={onSwapClick} />
    </div>
  )
}

export default EditableLatexField
