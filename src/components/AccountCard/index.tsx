import { LargeButton } from "../Buttons/LargeButton";
import { colors } from "../../styles/colors";
import type { IAccount } from "../../interfaces";

export function AccountCard({account}:{account:IAccount}) {
  return (
    <article
      className="text-white my-2 text-base bg-black lg:w-75 w-85 p-2 rounded-xl border-t-red-100 border-t-3"
      style={{ borderTopColor: account.color }}
    >
      <div className="text-xl">{account.name}</div>
      <div>{account.type}</div>
      <div className="text-disabled text-xs flex justify-between">
        <div className="text-l">Atualizado em {account.updated_at}</div>
        <div>Criado em {account.created_at}</div>
      </div>
      <p className="text-justify">{account.description}</p>

      <p className="text-right text-xl text-golden">R$ {account.balance}</p>

      <div className="flex flex-col xs:flex-row  justify-between w-full py-2 gap-2">
        <div className="w-full xs:w-40">
          <LargeButton color={colors.buttonGreen} text="Tranferir" route={`/transferir/${account.id}`}  />
        </div>
        <div className="w-full xs:w-40">
          <LargeButton color={colors.buttonBlue} text="Ver Detalhes" route={`/conta/${account.id}`} />
        </div>
      </div>
    </article>
  );
}
