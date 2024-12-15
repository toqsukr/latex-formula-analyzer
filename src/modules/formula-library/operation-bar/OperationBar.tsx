import { useFirstTip } from "@modules/app/store"
import SpinnerLoader from "@shared/ui/spinner-loader/SpinnerLoader"
import cn from "classnames"
import { FC } from "react"
import { StaticMathField } from "react-mathquill"
import FormulaTemplate from "../formula-template/FormulaTemplate"
import { useOperations } from "../model/hooks/useOperations"
import css from "./OperationBar.module.scss"

const OperationBar: FC<{ onAdd: (value: string) => void }> = ({ onAdd }) => {
  const { currentStep, firstTip } = useFirstTip()

  const { data, isLoading } = useOperations()

  return (
    <section
      className={cn(css.bar, { [css.bar_tip]: firstTip && currentStep === 3 })}
    >
      {isLoading || !data ? (
        <SpinnerLoader />
      ) : (
        <>
          {data.latex_operations.map(({ label, latex }) => (
            <div key={latex} className="h-[100px]">
              <FormulaTemplate
                templates={[
                  {
                    element: <StaticMathField>{label}</StaticMathField>,
                    value: latex,
                  },
                ]}
                onAdd={onAdd}
              />
            </div>
          ))}
        </>
      )}
    </section>
  )
}

export default OperationBar
