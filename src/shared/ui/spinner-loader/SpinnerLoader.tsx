import CircularProgress from "@mui/material/CircularProgress"
import cn from "classnames"
import { FC, HTMLAttributes } from "react"

const SpinnerLoader: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full h-full justify-center items-center",
        className
      )}
    >
      <CircularProgress sx={{ color: "var(--form-text-color)" }} />
    </div>
  )
}

export default SpinnerLoader
