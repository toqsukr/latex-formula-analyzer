import ManipulationBar from "@shared/manipulation-bar/ManipulationBar"
import IconButton from "@shared/ui/icon-button/IconButton"
import SpinnerLoader from "@shared/ui/spinner-loader/SpinnerLoader"
import { MdCompareArrows } from "react-icons/md"
import { useActiveField } from "../store"
import { FieldKeys } from "../type.d"
import css from "./CompareControl.module.scss"
import { useCompare } from "./useCompare"

const CompareControl = () => {
  const {
    firstKey,
    secondKey,
    firstControl,
    secondControl,
    handleCompare,
    isFormulesComparing,
  } = useCompare()

  const { fieldKey } = useActiveField()

  const content = [
    <MdCompareArrows />,
    <SpinnerLoader className="absolute top-0 left-0" />,
  ]
  return (
    <>
      <ManipulationBar
        {...firstControl}
        active={fieldKey === FieldKeys.FIRST}
        uploadKey={firstKey}
      />
      <ManipulationBar
        {...secondControl}
        active={fieldKey === FieldKeys.SECOND}
        uploadKey={secondKey}
      />
      <IconButton
        onClick={handleCompare}
        id={css.compare}
        icon={content[+isFormulesComparing]}
      />
    </>
  )
}

export default CompareControl
