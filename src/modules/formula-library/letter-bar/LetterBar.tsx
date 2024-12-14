import IconButton from "@shared/ui/icon-button/IconButton"
import { FC } from "react"
import { StaticMathField } from "react-mathquill"
import FormulaTemplate from "../formula-template/FormulaTemplate"
import { greekLetters } from "./LetterBar.data"
import css from "./LetterBar.module.scss"

const LetterBar: FC<{ onAdd: (value: string) => void }> = ({ onAdd }) => {
  return (
    <aside className={css.letter_bar}>
      {greekLetters.map((letter) => (
        <FormulaTemplate
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
