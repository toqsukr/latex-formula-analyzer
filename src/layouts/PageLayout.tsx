import { FC, PropsWithChildren } from "react"
import ControlLayout from "./control-layout/ControlLayout"

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="h-full flex flex-col gap-6 justify-center items-center px-16">
      <ControlLayout>{children}</ControlLayout>
    </main>
  )
}

export default PageLayout
