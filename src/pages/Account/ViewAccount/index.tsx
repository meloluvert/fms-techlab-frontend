import type { IAccount } from "../../../components/FormInput";
import type { ITransaction } from "../../../interfaces";
import { LargeButton } from "../../../components/LargeButton";
import { colors } from "../../../styles/colors";
import { TransactionsCard } from "../../../components/TransactionCard";
export function ViewAccount({ account, transactions }: { account: IAccount; transactions: ITransaction[]; }) {
  return (

    <div className="border-t-10 -mt-3 w-full p-1" style={{ borderTopColor: account.color }}>
      <h2 className="text-white text-3xl p-2">{account.name}</h2>
      <div className="text-disabled text-xs flex justify-between">
        <div className="text-sm">Atualizado em {account.updated_at}</div>
        <div className="text-sm">Criado em {account.created_at}</div>
      </div>
      <p className="text-white">{account.description}</p>
      <span className="text-left text-xl text-golden">R$ {account.balance}</span>
      
        <div className="w-full px-3 flex justify-center">
        <LargeButton color={colors.buttonGreen} text="Tranferir" />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
      {transactions.map((t, index) => (
        <TransactionsCard key={index} {...t} />
      ))}
      </div>
    </div>




  )
}
