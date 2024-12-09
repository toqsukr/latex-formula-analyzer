import { Button } from "@mui/material"
import { FC, useState } from "react"
import SwapIcon from "../../../shared/ui/SwapIcon"
import css from "./FormulaTemplate.module.scss"
import { FormulaTemplateProp } from "./FormulaTemplate.type"

const FormulaTemplate: FC<FormulaTemplateProp> = ({ onAdd, variants }) => {
  const [variantIndex, setVariant] = useState(0)
  return (
    <div className={css.template}>
      <div className={css.formula}>
        {variants.length > 1 && (
          <button>
            <SwapIcon
              className={css.swap}
              onClick={() => setVariant((prev) => (prev + 1) % variants.length)}
            />
          </button>
        )}
        {variants[variantIndex]}
      </div>
      <Button onClick={onAdd}>Add</Button>
    </div>
  )
}

export default FormulaTemplate
