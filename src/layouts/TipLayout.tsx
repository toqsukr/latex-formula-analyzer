import { useFirstTip } from "@modules/app/store"
import Tip from "@modules/tip/tip/Tip"
import { FC, PropsWithChildren } from "react"

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
