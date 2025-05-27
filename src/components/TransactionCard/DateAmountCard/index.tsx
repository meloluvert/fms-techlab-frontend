import type { IAccount, IAccountType } from "../../../interfaces";

interface IDateAmountProps {
    type?: string,
    sourceAccount?:IAccount | null;
    destinationAccount?: IAccount;
    date: string | Date;
}

export function DateAmountCard({ sourceAccount, destinationAccount, date, type }: IDateAmountProps) {
    
    return (type == "initial_balance") ? (
        <div className="flex flex-row justify-between items-center">
            <div className="mt-2 text-base text-disabled">
                {date}
            </div>
            <div className="text-golden">
                R$ {destinationAccount?.balance}
            </div>
        </div>
    ) : (
<div className=" text-sm text-gray-300">
            <div className="mt-2 text-base text-disabled">
                {date}
            </div>
            <p>
                Saldo em {sourceAccount?.name}:{" "}
                <span className="text-golden">R$ {sourceAccount?.balance}</span>
            </p>


            <p>
                Saldo em {destinationAccount?.name}:{" "}
                <span className="text-golden">R$ {destinationAccount?.balance}</span>
            </p>
        </div>
  )
}
