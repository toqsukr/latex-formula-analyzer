import { useControl } from "@modules/formula-library/store"
import ManipulationBar from "@shared/manipulation-bar/ManipulationBar"
import IconButton from "@shared/ui/icon-button/IconButton"
import { MdCompareArrows } from "react-icons/md"
import css from "./CompareControl.module.scss"

const CompareControl = () => {
  const { key: uploadKey, latexValue, handleChange, clearLatex } = useControl()
  const manipulatorProps = { uploadKey, latexValue, handleChange, clearLatex }
  return (
    <>
      <ManipulationBar {...manipulatorProps} />
      <ManipulationBar
        clearLatex={() => {}}
        handleChange={() => {}}
        latexValue=""
      />
      <IconButton id={css.compare} icon={<MdCompareArrows />} />
    </>
  )
}

export default CompareControl
