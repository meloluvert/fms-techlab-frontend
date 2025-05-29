import type { ReactNode } from "react";
import type { IAccount, } from "../../../interfaces";

interface IDateAmountProps {
    type?: string,

    //saldo logo após a transação
    originAccountBalance?:string | Number; 
    destinationAccountBalance?: string | Number;

    date: string | Date;
    destinationAccount?: IAccount;
    originAccount?:IAccount | null;
}

export function DateAmountCard({ destinationAccount, originAccount,originAccountBalance, destinationAccountBalance, date, type }: IDateAmountProps) {
    
    return (type == "initial_balance") ? (
        <div className="flex flex-row justify-between items-center">
            <div className="mt-2 text-base text-disabled">
                {date as ReactNode}
            </div>
            <div className="text-golden">
                R$ {destinationAccountBalance as ReactNode}
            </div>
        </div>
    ) : (
<div className=" text-sm text-gray-300">
            <div className="mt-2 text-base text-disabled">
                {date as ReactNode}
            </div>
            <p>
                Saldo em {originAccount?.name}:{" "}
                <span className="text-golden">R$ {originAccountBalance as ReactNode}</span>
            </p>


            <p>
                Saldo em {destinationAccount?.name}:{" "}
                <span className="text-golden">R$ {destinationAccountBalance as ReactNode}</span>
            </p>
        </div>
  )
}
