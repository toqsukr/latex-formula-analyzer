import { SxProps } from "@mui/material"

export const buttonStyle: SxProps = {
  fontSize: "1.08rem",
  color: "black",
  backgroundColor: "white",
  borderRadius: "1rem",
  opacity: 0.85,
  transition: "opacity .3s",
  "&:hover": {
    opacity: 1,
  },
}
