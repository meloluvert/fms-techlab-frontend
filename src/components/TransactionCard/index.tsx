import type { ReactNode } from "react";
import { HiUpload } from "react-icons/hi";
import { NameAccountCard } from "./NameAccountCard";
import { HiDownload } from "react-icons/hi";
import { colors } from "../../styles/colors";
import { TitleCard } from "./TitleCard";
import { DateAmountCard } from "./DateAmountCard";
import type { ITransaction } from "../../interfaces";

export function TransactionsCard(transaction: ITransaction) {
    let title_card: string | null = null;
    let bgColor: string = colors.bgDarkGray; // valor padrão
    let icon: ReactNode | null = null;
    const sizeIcon = 20;
    switch (transaction.type) {
        case "initial_balance":
            title_card = "Saldo Inicial";
            bgColor = colors.bgDarkGray;
            break;
        case "sent":
            title_card = "Enviado";
            bgColor = colors.bgRed;
            icon = <HiUpload size={sizeIcon} />;
            break;
        case "received":
            title_card = "Recebido";
            bgColor = colors.bgGreen;
            icon = <HiDownload size={sizeIcon} />;
            break;
        case "transfer":
            title_card = "Transferência";
            bgColor = colors.bgDarkGray;
            break;
        case "edited":
            title_card = "Edição de Saldo";
            if(!transaction.originAccount){
                bgColor = colors.bgGreen;
            }else{

                bgColor = colors.bgRed;
            }
            break;
            
        default:
            title_card = "Desconhecido";
    }

    return (
        <div className="flex w-full justify-center">
        <div className="flex flex-col bg-gray w-90 xl:w-75 lg:w-75 my-2 rounded-xl p-2 text-white">
            <TitleCard icon={icon} title_card={title_card} amount={transaction.amount} bgColor={bgColor} />


            <NameAccountCard
                type={transaction.type}
                originAccount={transaction.originAccount}
                destinationAccount={transaction.destinationAccount}
            />

{transaction.description != "Saldo inicial" && transaction.description}

            <DateAmountCard
                destinationAccountBalance={transaction.destinationBalance}
                originAccount={transaction.originAccount}
                originAccountBalance={transaction.originBalance}
                destinationAccount={transaction.destinationAccount}
                date={transaction.created_at}
            />

        </div>
        </div>
    );
}
