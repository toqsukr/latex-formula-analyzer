import { FC } from "react"
import css from "./AchievementMessage.module.scss"

const AchievementMessage: FC<{ text: string }> = ({ text }) => {
  return <div className={css.achievement}>{text}</div>
}

export default AchievementMessage
