import { useAuth } from "../../../contexts/auth";
import { useEffect, useState } from "react";
import { axiosPrivate } from "../../../services/api";
import type { ITransaction } from "../../../interfaces";
import { TransactionsCard } from "../../../components/TransactionCard";
import { Loading } from "../../../components/Loading";
export function mapTransactionFromApi(t: any): ITransaction {
  return {
    id: t.id,
    type: t.originAccount === null ? "initial_balance" : "transfer",
    amount: t.amount,
    created_at: t.created_at,
    destinationBalance: t.destinationBalance,
    originBalance: t.originBalance,
    description: t.description,
    sourceAccount: t.originAccount
      ? {
          id: t.originAccount.id,
          name: t.originAccount.name,
          balance: t.originBalance,
          color: t.originAccount.color,
          description: t.originAccount.description,
        }
      : null,
    destinationAccount: t.destinationAccount
      ? {
          id: t.destinationAccount.id,
          name: t.destinationAccount.name,
          balance: t.destinationBalance,
          color: t.destinationAccount.color,
          description: t.destinationAccount.description,
        }
      : null,
  };
}


export function TransactionsHistory() {
  const { user, token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    if (!token || !user) return;
    setLoading(true);

    axiosPrivate
      .get("/transactions")
      .then((res) => {
        console.log(res.data)
        const mapped = res.data.map(mapTransactionFromApi);
        console.log(mapTransactionFromApi)
        setTransactions(mapped);
      })
      .catch((err) => {
        setTransactions([]);
        console.error("Erro ao buscar transações:", err);
      })
      .finally(() => setLoading(false));
  }, [token, user]);

  if (loading) return <Loading/>;

  return (
    <main>
      <h2 className="text-white text-4xl">Histórico de Transações</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-4 ">
        {transactions.map((t, index) => (
          <TransactionsCard key={index} {...t} />
        ))}
      </div>
    </main>
  );
}
