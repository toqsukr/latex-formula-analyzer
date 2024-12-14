import { MutationKeys } from "@modules/app/constants"
import UploadImage from "@modules/latex-extract/upload-image/UploadImage"
import IconButton from "@shared/ui/icon-button/IconButton"
import SpinnerLoader from "@shared/ui/spinner-loader/SpinnerLoader"
import { useIsMutating } from "@tanstack/react-query"
import { FC } from "react"
import { IoCopyOutline } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx"
import { EditableMathField } from "react-mathquill"
import css from "./ManipulationBar.module.scss"
import { ManipulationBarProp } from "./ManipulationBar.type"
import "./mathquill.scss"

const ManipulationBar: FC<ManipulationBarProp> = ({
  latexValue,
  handleChange,
  clearLatex,
  uploadKey,
}) => {
  const isFetching = useIsMutating({
    mutationKey: [MutationKeys.UPLOAD_IMAGE, uploadKey],
  })
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(latexValue)
      alert("Successful copied!")
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className={css.manipulator}>
      <div className="flex relative">
        {!!isFetching && <SpinnerLoader className="absolute top-0 left-0" />}
        <EditableMathField
          className="flex-1"
          latex={latexValue}
          onChange={(mathField) => {
            handleChange(mathField.latex(), true)
          }}
        />
      </div>
      <div className={css.buttons}>
        <IconButton
          onClick={handleCopy}
          icon={<IoCopyOutline className="w-[26px] h-[26px]" />}
        />
        <IconButton
          onClick={clearLatex}
          id={css.reset}
          icon={<RxCross2 className="w-[26px] h-[26px]" />}
        />
        <UploadImage
          mutationKey={uploadKey}
          onSuccess={(formulas) => handleChange(formulas.join("\\"))}
        />
      </div>
    </div>
  )
}

export default ManipulationBar
