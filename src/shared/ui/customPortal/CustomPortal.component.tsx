import { FC, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { CustomPortalProp } from './CustomPortal.interface'

const CustomPortal: FC<PropsWithChildren<CustomPortalProp>> = ({
  children,
  portalParentElement,
}) => {
  return portalParentElement && ReactDOM.createPortal(children, portalParentElement)
}

export default CustomPortal
