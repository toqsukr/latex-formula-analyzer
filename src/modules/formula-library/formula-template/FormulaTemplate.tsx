import IconButton from "@shared/ui/icon-button/IconButton"
import { FC, useState } from "react"
import SwapIcon from "../../../shared/ui/SwapIcon"
import css from "./FormulaTemplate.module.scss"
import { FormulaTemplateProp } from "./FormulaTemplate.type"

const FormulaTemplate: FC<FormulaTemplateProp> = ({ templates, onAdd }) => {
  const [variantIndex, setVariant] = useState(0)
  const { element, value } = templates[variantIndex]

  const icon = (
    <div className="flex justify-center items-center relative h-full w-full">
      {templates.length > 1 && (
        <button className={css.swap_wrapper}>
          <SwapIcon
            id={css.swap}
            onClick={(e) => {
              e.stopPropagation()
              setVariant((prev) => (prev + 1) % templates.length)
            }}
          />
        </button>
      )}
      {element}
    </div>
  )
  return (
    <div className={css.template}>
      <IconButton icon={icon} onClick={() => onAdd(value)} />
    </div>
  )
}

export default FormulaTemplate
