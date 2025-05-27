import { AccountCard } from "../../components/AccountCard";
import { useAuth } from "../../contexts/auth";
import { useEffect } from "react";
import { axiosPrivate } from "../../services/api";
import { useState } from "react";
import { Loading } from "../../components/Loading";
export function Home() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (!token) return;
    setLoading(true);

    axiosPrivate
      .get("/accounts")
      .then((res) => {
        setAccounts(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar contas:", err);
      })
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <Loading/>;

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-4 ">
      {accounts.map((acc) => (
        <AccountCard account={acc} />
      ))}
      
      <button className="text-gray bg-golden text-lg fixed bottom-7 right-7 p-2 font-semibold border rounded">
        <a href="account/new/">Nova Conta</a>
      </button>
      
    </main>
  );
}
