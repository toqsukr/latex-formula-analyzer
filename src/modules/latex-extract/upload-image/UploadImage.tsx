import IconButton from "@shared/ui/icon-button/IconButton"
import { FC, useRef } from "react"
import { MdOutlineFileUpload } from "react-icons/md"
import { useUploadImage } from "../model/hooks/useUploadImage"
import { UploadImageProp } from "./UploadImage.type"

const UploadImage: FC<UploadImageProp> = ({
  onSuccess,
  onError,
  mutationKey,
}) => {
  const { uploadImage } = useUploadImage(mutationKey)
  const ref = useRef<HTMLInputElement>(null)
  const onSubmit = (files: File[]) => {
    const file = files[0]
    const reader = new FileReader()

    reader.onloadend = async () => {
      try {
        const { formulas } = await uploadImage(file)
        onSuccess(formulas)
        if (ref.current) ref.current.value = ""
      } catch {
        onError?.()
      }
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="flex relative">
      <input
        ref={ref}
        className="absolute hidden w-0 h-0"
        onChange={(e) => onSubmit((e.target.files ?? []) as File[])}
        type="file"
        accept="image/*"
      />
      <IconButton
        className="flex-1"
        onClick={() => ref.current?.click()}
        icon={<MdOutlineFileUpload className="w-[26px] h-[26px]" />}
      />
    </div>
  )
}

export default UploadImage
