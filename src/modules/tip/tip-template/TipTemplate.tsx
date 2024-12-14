import Button from "@shared/ui/button/Button"
import cn from "classnames"
import { FC, PropsWithChildren } from "react"
import css from "./TipTemplate.module.scss"
import { TipTemplateProp } from "./TipTemplate.type"

const TipTemplate: FC<PropsWithChildren<TipTemplateProp>> = ({
  children,
  onClick,
  text,
  className,
}) => {
  return (
    <div className={cn(css.template, className)}>
      {children}
      <Button onClick={onClick}>{text}</Button>
    </div>
  )
}

export default TipTemplate
