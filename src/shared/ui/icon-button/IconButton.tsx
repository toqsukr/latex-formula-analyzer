import cn from "classnames"
import { FC } from "react"
import css from "./IconButton.module.scss"
import { IconButtonProp } from "./IconButton.type"

const IconButton: FC<IconButtonProp> = ({ icon, className, ...props }) => {
  return (
    <button {...props} className={cn(css.icon_button, className)}>
      {icon}
    </button>
  )
}

export default IconButton
