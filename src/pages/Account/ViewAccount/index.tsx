import type { IAccount } from "../../../interfaces";
import type { ITransaction } from "../../../interfaces";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { TransactionsCard } from "../../../components/TransactionCard";
import { SmallButton } from "../../../components/Buttons/SmallButton";
import { FaFilter } from "react-icons/fa";

export function ViewAccount({
  account,
  transactions,
}: {
  account: IAccount;
  transactions: ITransaction[];
}) {
  return (
    <div
      className="border-t-10 -mt-3 w-full p-2"
      style={{ borderTopColor: account.color }}
    >
      <div className="flex w-full justify-between ">
        <span className="text-white text-3xl w-1/2 p-2">{account.name}</span>
        <div className="w-1/2 flex flex-row items-center justify-end gap-1">
          <SmallButton
            color={colors.buttonRed}
            icon={<FaTrash color={colors.white} size={15} />}
          />
          <SmallButton
            color={colors.buttonBlue}
            icon={<MdEdit color={colors.white} size={15} />}
          />
        </div>
      </div>
      <div className="text-disabled text-xs flex justify-around">
        <div className="text-base flex flex-col w-1/2">
          <span>Atualizado em</span>
          <span> {account.updated_at}</span>
        </div>
        <div className="text-base flex flex-col w-1/2">
          <span>Criado em</span>
          <span> {account.created_at}</span>
        </div>
      </div>
      <p className="text-white text-justify">{account.description}</p>
      <div>
        <p className="text-right  py-2 text-3xl text-golden">
          R$ {account.balance}
        </p>
      </div>
      <div className="w-full px-3 flex justify-center">
        <LargeButton color={colors.buttonGreen} text="Tranferir" />
      </div>
      <div className="flex flex-row text-white p-2 w-full justify-between items-center">
        <span>Histórico de Transações</span>
        <SmallButton
          color={colors.white}
          icon={<FaFilter color={colors.white} size={15} />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4  gap-4 ">
        {transactions.map((t, index) => (
          <TransactionsCard key={index} {...t} />
        ))}
      </div>
    </div>
  );
}
