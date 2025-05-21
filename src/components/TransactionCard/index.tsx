
import type { ReactNode } from "react";
import { HiUpload } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

/*
initial_balance
sent
received
transfer
*/
export interface ITransaction {
    type: string,
    amount: number, //valor transferido
    sourceAccount?: {
        name: string
        balance: number
    },
    destinationAccount?: {
        name: string
        balance: number
    }
    date: string
}



export function TransactionsCard(transaction: ITransaction) {
    let title_card: string | null = null;
    let icon: ReactNode | null = null
    switch (transaction.type) {
        case 'initial_balance':
            title_card = 'Saldo Inicial';

            break;
        case 'sent':
            title_card = 'Enviado';
            icon = <HiUpload />;
            break;
        case 'received':
            title_card = 'Recebido';
            icon = <HiDownload />;
            break;
        case 'transfer':
            title_card = 'Transferência';
            break;
        default:
            break;
    }

    return (
        <div>
            <div>
                <div>
                    {icon}
                    {title_card}
                </div>
                <span> {transaction.amount} </span>
            </div>
            {transaction.type == 'initial_state' ? '' :
                <div>
                    <div>
                        {transaction.sourceAccount?.name}
                    </div>
                    <FaArrowRightLong />
                    <div>
                        {transaction.destinationAccount?.name}
                    </div>

                </div>
            }
            {transaction.type == 'tranfer' ?
                <div>
                    <p>Saldo em {transaction.sourceAccount?.name} : {transaction.sourceAccount?.balance}</p>
                    <p>Saldo em {transaction.destinationAccount?.name} : {transaction.sourceAccount?.balance} </p>
                </div>

                :
                <div>
                    <div>{transaction.date}</div>
                    <div>{transaction.amount}</div>
                </div>

            }
        </div>

    )
}