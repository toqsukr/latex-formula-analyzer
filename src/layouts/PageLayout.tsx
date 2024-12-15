import { FC, PropsWithChildren } from "react"
import ControlLayout from "./control-layout/ControlLayout"

/**
 * Обертка для задания общего положения дочерних элементов
 *
 * @param children дочерние элементы
 */
const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="h-full flex flex-col gap-6 justify-center items-center py-8 px-20">
      <ControlLayout>{children}</ControlLayout>
    </main>
  )
}

export default PageLayout
