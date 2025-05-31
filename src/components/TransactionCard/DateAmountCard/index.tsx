import type { ReactNode } from "react";
import type { IAccount } from "../../../interfaces";

interface IDateAmountProps {
  originAccountBalance?: string | Number;
  destinationAccountBalance?: string | Number;
  date: string | Date;
  destinationAccount?: IAccount | null;
  originAccount?: IAccount | null;
}

export function DateAmountCard({
  destinationAccount,
  originAccount,
  originAccountBalance,
  destinationAccountBalance,
  date,
}: IDateAmountProps) {
  return (
    <div className=" text-sm text-gray-300">
      <div className="mt-2 text-base text-disabled">{date as ReactNode}</div>
      {originAccount && (
        <p>
          Saldo em {originAccount?.name}:{" "}
          <span className="text-golden">
            R$ {originAccountBalance as ReactNode}
          </span>
        </p>
      )}
      {destinationAccount && (
        <p>
          Saldo em {destinationAccount?.name}:{" "}
          <span className="text-golden">
            R$ {destinationAccountBalance as ReactNode}
          </span>
        </p>
      )}
    </div>
  );
}
