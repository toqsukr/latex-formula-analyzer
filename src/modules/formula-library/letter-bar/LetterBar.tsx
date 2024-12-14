import { useFirstTip } from "@modules/app/store"
import IconButton from "@shared/ui/icon-button/IconButton"
import cn from "classnames"
import { FC } from "react"
import { StaticMathField } from "react-mathquill"
import FormulaTemplate from "../formula-template/FormulaTemplate"
import { greekLetters } from "./LetterBar.data"
import css from "./LetterBar.module.scss"

const LetterBar: FC<{ onAdd: (value: string) => void }> = ({ onAdd }) => {
  const { currentStep, firstTip } = useFirstTip()
  return (
    <aside
      className={cn(css.letter_bar, {
        [css.letter_bar_tip]: firstTip && currentStep === 4,
      })}
    >
      {greekLetters.map((letter) => (
        <FormulaTemplate
          key={letter}
          onAdd={onAdd}
          templates={[
            {
              element: (
                <IconButton
                  key={letter}
                  icon={<StaticMathField>{letter}</StaticMathField>}
                />
              ),
              value: letter,
            },
          ]}
        />
      ))}
    </aside>
  )
}

export default LetterBar
