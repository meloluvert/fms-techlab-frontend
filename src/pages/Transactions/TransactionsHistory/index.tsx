import { TransactionsCard } from "../../../components/TransactionCard";
import type { ITransaction } from "../../../interfaces";
export const testTransactions = [
  {
    type: 'received',
    amount: 1000,
    date: '2024-05-21',
    destinationAccount: {
      name: 'Conta Principal',
      balance: 1000
    }
  },
  {
    type: 'sent',
    amount: 250,
    date: '2024-05-22',
    sourceAccount: {
      name: 'Conta Principal',
      balance: 750
    },
    destinationAccount: {
      name: 'Mercado',
      balance: 0
    }
  },
  {
    type: 'initial_balance',
    amount: 400,
    date: '2024-05-23',
    sourceAccount: {
      name: 'Conta Principal',
      balance: 350
    },
    destinationAccount: {
      name: 'Conta Poupança',
      balance: 1400
    }
  },
  {
    type: 'initial_balance',
    amount: 400,
    date: '2024-05-23',
    sourceAccount: {
      name: 'Conta Principal',
      balance: 350
    },
    destinationAccount: {
      name: 'Conta Poupança',
      balance: 1400
    }
  },
  {
    type: 'initial_balance',
    amount: 400,
    date: '2024-05-23',
    sourceAccount: {
      name: 'Conta Principal',
      balance: 350
    },
    destinationAccount: {
      name: 'Conta Poupança',
      balance: 1400
    }
  },
  {
    type: 'received',
    amount: 400,
    date: '2024-05-23',
    sourceAccount: {
      name: 'Conta Principal',
      balance: 350
    },
    destinationAccount: {
      name: 'Conta Poupança',
      balance: 1400
    }
  }
];
export function TransactionsHistory({transactions}:{transactions:ITransaction[]}) {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-4 ">
        {transactions.map((t, index) => (
          <TransactionsCard key={index} {...t} />
        ))}
      </div>
      )
}