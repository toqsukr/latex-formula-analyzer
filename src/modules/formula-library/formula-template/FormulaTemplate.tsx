import { Button } from "@mui/material"
import { FC, useState } from "react"
import SwapIcon from "../../../shared/ui/SwapIcon"
import css from "./FormulaTemplate.module.scss"
import { FormulaTemplateProp } from "./FormulaTemplate.type"

const FormulaTemplate: FC<FormulaTemplateProp> = ({ templates, onAdd }) => {
  const [variantIndex, setVariant] = useState(0)
  const { element, value } = templates[variantIndex]
  return (
    <div className={css.template}>
      <div className={css.formula}>
        {templates.length > 1 && (
          <button>
            <SwapIcon
              className={css.swap}
              onClick={() =>
                setVariant((prev) => (prev + 1) % templates.length)
              }
            />
          </button>
        )}
        {element}
      </div>
      <Button onClick={() => onAdd(value)}>Add</Button>
    </div>
  )
}

export default FormulaTemplate
