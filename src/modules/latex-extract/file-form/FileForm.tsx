import { ButtonBase, Input } from "@mui/material"
import { useForm } from "react-hook-form"
import extractService from "../service"

const FileForm = () => {
  const { register, handleSubmit } = useForm<{ files: File[] }>()
  const onSubmit = (data: { files: File[] }) => {
    console.log(data.files[0])
    const { files } = data
    const file = files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      // const imageURL = reader.result as string
      // const blob = await extractService.getImage(imageURL)
      // const blobArray = new File([blob], file.name, {
      //   type: blob.type,
      // }) as Blob
      extractService.extractImageToLatex(file)
    }
    reader.readAsDataURL(file)
  }
  return (
    <div className="flex flex-col gap-4">
      <Input {...register("files")} type="file" />
      <ButtonBase onClick={handleSubmit(onSubmit)}>Отправить</ButtonBase>
    </div>
  )
}

export default FileForm
