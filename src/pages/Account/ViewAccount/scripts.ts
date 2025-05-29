import { useEffect, useState } from "react";
import { axiosPrivate } from "../../../services/api";
import type { IAccount, ITransaction } from "../../../interfaces";

export function useViewAccount(id: string | undefined) {
  const [account, setAccount] = useState<IAccount | null>(null);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID da conta não fornecido");
      setLoading(false);
      return;
    }
    setLoading(true);
    axiosPrivate
      .get(`/accounts/${id}`)
      .then((res) => {
        setAccount(res.data);
        setTransactions(res.data.transactions || []);
      })
      .catch(() => {
        setError("Erro ao buscar dados da conta");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const mappedTransactions = transactions.map((t) => {
    let type: "received" | "sent" | "initial_balance" = "initial_balance";
    if (t.destinationAccount?.id === account?.id && t.originAccount) {
      type = "received";
    } else if (t.originAccount?.id === account?.id) {
      type = "sent";
    }

    return {
      ...t,
      type,
      sourceAccount: t.originAccount ?? undefined,
      destinationAccount: t.destinationAccount,
      date: t.created_at,
    };
  });

  return {
    account,
    mappedTransactions,
    loading,
    error,
  };
}
