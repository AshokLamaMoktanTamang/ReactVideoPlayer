import { MouseEventHandler, ReactNode } from "react"

export interface IButton {
    icon: ReactNode
    toolTip: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}