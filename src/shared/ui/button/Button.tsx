import { ButtonBase, ButtonBaseProps } from "@mui/material"
import { FC, PropsWithChildren } from "react"
import { buttonStyle } from "./Button.style"

const Button: FC<PropsWithChildren<ButtonBaseProps>> = ({
  children,
  ...props
}) => {
  return (
    <ButtonBase {...props} sx={buttonStyle}>
      {children}
    </ButtonBase>
  )
}

export default Button
