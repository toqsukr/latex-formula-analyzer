import { useFirstTip } from "@modules/app/store"
import Tip from "@modules/tip/tip/Tip"
import { FC, PropsWithChildren } from "react"

/**
 * Обертка для отображения подсказок
 *
 * @param children дочерние элементы
 */

const TipLayout: FC<PropsWithChildren> = ({ children }) => {
  const { firstTip } = useFirstTip()
  return (
    <>
      {children}
      {firstTip && <Tip />}
    </>
  )
}

export default TipLayout
