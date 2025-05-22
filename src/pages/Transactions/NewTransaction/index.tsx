import { FaCheck, FaTrash } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FormInput } from "../../../components/FormInput";
import { LargeButton } from "../../../components/LargeButton";
import { useState } from "react";
import { TransferTable } from "../../../components/TransferTable";
import { colors } from "../../../styles/colors";
import type { IAccount } from "../../../components/FormInput";
export const accounts: IAccount[] = [
    {
        id: "1",
        name: "Conta Principal",
        balance: "142351",
    },
    {
        id: "2",
        name: "Poupança",
        balance:"178200"
    },
    {
        id: "3",
        name: "Investimentos",
        balance:"15222"
    },
    {
        id: "4",
        name: "Carteira Digital",
        balance:"15222"
    },
];


export function NewTransaction() {
     // Estados para seleção das contas e valor
  const [fromId, setFromId] = useState(accounts[0].id);
  const [toId, setToId] = useState(accounts[1].id);
  const [value, setValue] = useState(0);

  // Busca os dados das contas selecionadas
  const fromAccount = accounts.find(acc => acc.id === fromId)!;
  const toAccount = accounts.find(acc => acc.id === toId)!;

    return (
        <form className="w-full  rounded-2xl p-5" action="">
            <h2 className="text-2xl font-bold text-white text-left">Nova transação</h2>
            <div className="flex flex-row items-center">
                <div className="w-3/7">
                    <FormInput
                        name="from"
                        label="De"
                        type="select"
                        value={fromId}
                        options={accounts}
                        onChange={setFromId}
                    />
                </div>
                <FaArrowRightLong className="w-1/7" color={colors.white} />
                <div className="w-3/7">
                <FormInput
                    name="to"
                    label="Para"
                    type="select"
                    value={toId}
                    options={accounts}
                    onChange={setToId}
                />
                </div>
            </div>
            <FormInput
                name="valor"
                label="Valor"
                type="number"
                step="0.01"
                value={value}
                onChange={val => setValue(Number(val))}
                placeholder="Valor da transferência"
            />

<TransferTable
        fromName={fromAccount.name}
        toName={toAccount.name}
        fromBalance={Number(fromAccount.balance) / 100}
        toBalance={Number(toAccount.balance) / 100}
        transferValue={value}
      />
            <div className=" py-5 flex flex-col gap-2">
                <LargeButton
                    text="Realizar transferência"
                    color={colors.bgGreen}
                    icon={<FaCheck />}
                />

                <LargeButton
                    text="Cancelar"
                    icon={<FaTrash />}
                    color={colors.buttonRed}
                    route="/"
                />
            </div>
        </form>
    );
}
