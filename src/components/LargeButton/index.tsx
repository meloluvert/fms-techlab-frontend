
export interface ILargeButton{
    color: string
    text: string
    route?: string
}

export function LargeButton({color, text, route}:ILargeButton){
    return(
        <button style={{backgroundColor:color}} className=" bold rounded-3xl p-1 w-full text-white">
            {text}
        </button>
    )
}