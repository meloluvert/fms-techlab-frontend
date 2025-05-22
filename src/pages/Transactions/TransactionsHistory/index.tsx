import { TransactionsCard } from "../../../components/TransactionCard";
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
  }
];
export function TransactionsHistory() {


  return (
      <div className="flex flex-col items-center justify-center w-full">
        {testTransactions.map((t, index) => (
          <TransactionsCard key={index} {...t} />
        ))}
      </div>
      )
}