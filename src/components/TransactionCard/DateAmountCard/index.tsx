import type { IAccount, IAccountType } from "../../../interfaces";

interface IDateAmountProps {
    type?: string,
    sourceAccountBalance?:string | Number;
    destinationAccountBalance?: string | Number;
    date: string | Date;
    destinationAccount?: IAccount;
    sourceAccount?:IAccount | null
}

export function DateAmountCard({ destinationAccount, sourceAccount,sourceAccountBalance, destinationAccountBalance, date, type }: IDateAmountProps) {
    
    return (type == "initial_balance") ? (
        <div className="flex flex-row justify-between items-center">
            <div className="mt-2 text-base text-disabled">
                {date}
            </div>
            <div className="text-golden">
                R$ {destinationAccountBalance}
            </div>
        </div>
    ) : (
<div className=" text-sm text-gray-300">
            <div className="mt-2 text-base text-disabled">
                {date}
            </div>
            <p>
                Saldo em {sourceAccount?.name}:{" "}
                <span className="text-golden">R$ {sourceAccountBalance}</span>
            </p>


            <p>
                Saldo em {destinationAccount?.name}:{" "}
                <span className="text-golden">R$ {destinationAccountBalance}</span>
            </p>
        </div>
  )
}
