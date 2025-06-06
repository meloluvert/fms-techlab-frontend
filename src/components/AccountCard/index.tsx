import { LargeButton } from "../Buttons/LargeButton";
import { colors } from "../../styles/colors";
import type { IAccount } from "../../interfaces";

export function AccountCard({ account }: { account: IAccount }) {
  return (
    <article
      className="text-white my-2 text-base bg-black max-w-screen w-85 p-2 rounded-xl border-t-red-100 border-t-3 lg:w-75"
      style={{ borderTopColor: account.color }}
    >
      <div className="text-xl">{account.name}</div>
      <div>{account.type?.name || "Tipo desconhecido"}</div>
      <div className="text-disabled text-xs flex justify-between">
        <div className="text-l">Atualizado em {String(account.updated_at)}</div>
        <div>Criado em {String(account.created_at)}</div>
      </div>
      <p className="text-justify">{account.description}</p>

      <p className="text-right text-xl text-golden">R$ {account.balance}</p>

      <div className="flex flex-col   justify-between w-full py-2 gap-2 xs:flex-row">
        <div className="w-full xs:w-40">
          <LargeButton
            color={colors.buttonGreen}
            text="Tranferir"
            route={`/transfer/${account.id}`}
          />
        </div>
        <div className="w-full xs:w-40">
          <LargeButton
            color={colors.buttonBlue}
            text="Ver Detalhes"
            route={`/account/${account.id}`}
          />
        </div>
      </div>
    </article>
  );
}
