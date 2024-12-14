import { FC } from 'react'
import css from './ErrorMessage.module.scss'

const ErrorMessage: FC<{ text: string }> = ({ text }) => {
  return <div className={css.error}>Ошибка: {text}</div>
}

export default ErrorMessage
