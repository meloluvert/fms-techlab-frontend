
import type { ReactNode } from "react"

export interface ILargeButton {
    color: string
    text: string
    route?: string
    icon?: ReactNode
}

export function LargeButton({ color, text, route, icon }: ILargeButton) {
    return (
        (icon) ? (
        <button style={{ backgroundColor: color }} className="  font-semibold flex items-center justify-between bold rounded-3xl p-2 px-3 w-full text-white focus:outline-offset-2">
            {text}
            {icon}
        </button>
        ) :  (
        <button style={
            { backgroundColor: color}
            
            } className="font-semibold rounded-3xl p-1 w-full text-white focus:outline-offset-2 focus:outline-2">
                {text}
            </button>)
    )
}