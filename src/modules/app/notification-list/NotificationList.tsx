import { createRef, FC } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import css from "./NotificationList.module.scss"
import { NotificationListProp } from "./NotificationList.type"

const NotificationList: FC<NotificationListProp> = ({
  message: Message,
  notifications,
}) => {
  const referencedNotification = notifications.map((notification) => ({
    ...notification,
    nodeRef: createRef<HTMLDivElement>(),
  }))
  return (
    <TransitionGroup className={css.notification_list}>
      {referencedNotification.map(({ code, text, nodeRef }) => (
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
            <Message text={text} />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default NotificationList
