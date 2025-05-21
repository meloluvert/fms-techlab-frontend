
import { LargeButton } from "../LargeButton"
import { colors } from "../../styles/colors"
export interface IAccountCard {
    name: string,
    color: string,
    type: string,
    created_at: string
    updated_at: string
    description: string
    balance: number
}

export function AccountCard({ name, color, type, created_at, updated_at, description, balance }: IAccountCard) {
    return (
        <article className="text-white my-2 text-base bg-black w-90 p-3 rounded-xl border-t-red-100 border-t-3" style={{ borderTopColor: color }}>
            <div className="text-xl">{name}</div>
            <div>{type}</div>
            <div className="text-disabled text-xs flex justify-between">
                <div className="text-l">Atualizado em {updated_at}</div>
                <div>Criado em {created_at}</div>
            </div>
            <p>{description}</p>

            <p className="text-right text-xl text-golden">R$ {balance}</p>

            <div className="flex flex-row justify-between">
                <div className="w-40">
                    <LargeButton color={colors.buttonGreen} text="Tranferir" />
                </div>
                <div className="w-40">
                    <LargeButton color={colors.buttonBlue} text="Ver Detalhes" />
                </div>
            </div>

        </article>
    )
}
