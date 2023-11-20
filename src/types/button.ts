import { MouseEventHandler } from "react"

export interface IButton {
    icon: string
    toolTip: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}