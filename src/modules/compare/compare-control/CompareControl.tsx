import {
  useFirstControl,
  useSecondControl,
} from "@modules/formula-library/store"
import ManipulationBar from "@shared/manipulation-bar/ManipulationBar"
import IconButton from "@shared/ui/icon-button/IconButton"
import { MdCompareArrows } from "react-icons/md"
import css from "./CompareControl.module.scss"

const CompareControl = () => {
  const { key: firstKey, ...firstControl } = useFirstControl()
  const { key: secondKey, ...secondControl } = useSecondControl()
  return (
    <>
      <ManipulationBar {...firstControl} uploadKey={firstKey} />
      <ManipulationBar {...secondControl} uploadKey={secondKey} />
      <IconButton id={css.compare} icon={<MdCompareArrows />} />
    </>
  )
}

export default CompareControl
