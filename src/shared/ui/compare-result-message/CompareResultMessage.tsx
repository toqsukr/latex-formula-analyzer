import { FC } from "react"
import Latex from "react-latex-next"
import css from "./CompareResultMessage.module.scss"

const CompareResultMessage: FC<{ text: string }> = ({ text }) => {
  return (
    <div className={css.compare_result}>
      <Latex>{String.raw`$${text}$%`}</Latex>
    </div>
  )
}

export default CompareResultMessage
