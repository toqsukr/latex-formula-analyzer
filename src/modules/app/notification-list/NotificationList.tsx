import AchievementMessage from "@shared/ui/achievement-message/AchievementMessage"
import CompareResultMessage from "@shared/ui/compare-result-message/CompareResultMessage"
import ErrorMessage from "@shared/ui/error-message/ErrorMessage"
import { createRef, FC } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { NotificationType } from "../type"
import css from "./NotificationList.module.scss"
import { NotificationListProp } from "./NotificationList.type"

/**
 * Компонент для отображения списокк уведомлений
 * @param notifications уведомления для отображения
 */

const NotificationList: FC<NotificationListProp> = ({ notifications }) => {
  const referencedNotification = notifications.map((notification) => ({
    ...notification,
    nodeRef: createRef<HTMLDivElement>(),
  }))

  const message: Record<NotificationType, FC<{ text: string }>> = {
    error: ErrorMessage,
    success: AchievementMessage,
    "compare-result": CompareResultMessage,
  }

  const getMessage = (type: NotificationType, text: string) => {
    const Message = message[type]
    return <Message text={text} />
  }

  return (
    <TransitionGroup className={css.notification_list}>
      {referencedNotification.map(({ type, code, text, nodeRef }) => (
        <CSSTransition
          key={code}
          nodeRef={nodeRef}
          timeout={300}
          classNames={{
            enter: css.notification_enter,
            exit: css.notification_exit,
          }}
        >
          <div key={code} className="w-full h-full" ref={nodeRef}>
            {getMessage(type, text)}
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default NotificationList
