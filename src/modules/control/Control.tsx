import { useState } from "react"
import Latex from "react-latex-next"
import { addStyles, EditableMathField } from "react-mathquill"
import OperationBar from "../formula-library/operation-bar/OperationBar"
import css from "./Control.module.scss"

// const text = [
//   String.raw`
//     Subscripts in math mode are written as $a_b$ and superscripts are written as $a^b$. These can be combined an nested to write expressions such as
//     \[ T^{i_1 i_2 \dots i_p}_{j_1 j_2 \dots j_q} = T(x^{i_1},\dots,x^{i_p},e_{j_1},\dots,e_{j_q}) \]
//     We write integrals using $\int$ and fractions using $\frac{a}{b}$. Limits are placed on integrals using superscripts and subscripts:
//     \[ \int_0^1 \frac{dx}{e^x} =  \frac{e-1}{e} \]
//     Lower case Greek letters are written as $\omega$ $\delta$ etc. while upper case Greek letters are written as $\Omega$ $\Delta$. Mathematical operators are prefixed with a backslash as $\sin(\beta)$, $\cos(\alpha)$, $\log(x)$ etc.
//     `,
//   String.raw`
//     The mass-energy equivalence is described by the famous equation
//     \[ E=mc^2 \]
//     discovered in 1905 by Albert Einstein.
//     In natural units ($c = 1$), the formula expresses the identity
//     \[ E=m \]
//     `,
// ]

addStyles()

const Control = () => {
  const [value, setValue] = useState("")

  const handleChange = (inputValue: string, replace?: boolean) => {
    if (replace) {
      setValue(`${inputValue.replace(/\$/g, "")}`)
    } else {
      setValue((prev) => `${(prev + inputValue).replace(/\$/g, "")}`)
    }
  }
  return (
    <>
      <OperationBar onUpdate={handleChange} />
      <div className={css.input}>
        <EditableMathField
          latex={value}
          onChange={(mathField) => {
            handleChange(mathField.latex(), true)
          }}
        />
        <div className="text-5xl">
          <Latex>{value}</Latex>
        </div>
      </div>
    </>
  )
}

export default Control
