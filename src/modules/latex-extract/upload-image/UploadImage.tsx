import IconButton from "@shared/ui/icon-button/IconButton"
import { FC, useRef } from "react"
import { MdOutlineFileUpload } from "react-icons/md"
import { useUploadImage } from "../model/hooks/useUploadImage"
import { UploadImageProp } from "./UploadImage.type"

/**
 * Хук для загрузки фото формулы для последующего преобразования в latex
 *
 * @param onSuccess функция, выполняющаяся в случае успеха
 * @param onError функция, выполняющаяся в случае ошибки
 * @param mutationKey ключ управления запросом
 */

const UploadImage: FC<UploadImageProp> = ({
  onSuccess,
  onError,
  mutationKey,
}) => {
  const { uploadImage, isImageUploading } = useUploadImage(mutationKey)
  const ref = useRef<HTMLInputElement>(null)
  const onSubmit = (files: File[]) => {
    const file = files[0]
    const reader = new FileReader()

    reader.onloadend = async () => {
      try {
        const { formulas } = await uploadImage(file)
        onSuccess(formulas)
      } catch {
        onError?.()
      } finally {
        if (ref.current) ref.current.value = ""
      }
    }

    reader.readAsDataURL(file)
  }

  const handleClick = () => {
    if (!isImageUploading) {
      ref.current?.click()
    }
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
        onClick={handleClick}
        icon={<MdOutlineFileUpload className="w-[22px] h-[22px]" />}
      />
    </div>
  )
}

export default UploadImage
