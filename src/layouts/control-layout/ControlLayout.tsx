import { MutationKeys } from "@modules/app/constants"
import { useActiveField } from "@modules/compare/store"
import { FieldKeys } from "@modules/compare/type.d"
import LetterBar from "@modules/formula-library/letter-bar/LetterBar"
import OperationBar from "@modules/formula-library/operation-bar/OperationBar"
import {
  useFirstControl,
  useSecondControl,
} from "@modules/formula-library/store"
import { useIsMutating } from "@tanstack/react-query"
import { FC, PropsWithChildren } from "react"
import css from "./ControlLayout.module.scss"

const ControlLayout: FC<PropsWithChildren> = ({ children }) => {
  const { handleChange: firstChange } = useFirstControl()
  const { handleChange: secondChange } = useSecondControl()
  const { fieldKey } = useActiveField()
  const isImagesUploading = useIsMutating({
    mutationKey: [MutationKeys.UPLOAD_IMAGE, fieldKey],
  })

  const handleAdd = (value: string) => {
    if (!isImagesUploading) {
      if (fieldKey === FieldKeys.FIRST) {
        firstChange(value)
      } else {
        secondChange(value)
      }
    }
  }

  return (
    <section className={css.control_wrapper}>
      <div className={css.formula_wrapper}>
        <OperationBar onAdd={handleAdd} />
        <div className={css.content}>{children}</div>
      </div>
      <LetterBar onAdd={handleAdd} />
    </section>
  )
}

export default ControlLayout
