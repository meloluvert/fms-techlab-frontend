import { AccountCard } from "../../components/AccountCard";
import { useAuth } from "../../contexts/auth";
import { useEffect, useState } from "react";
import { axiosPrivate } from "../../services/api";
import { FaPlus } from "react-icons/fa";

import { Loading } from "../../components/Loading";

import { colors } from "../../styles/colors";
export function Home() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

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
  
  if (loading) return <Loading />;
  return (
    <main className={`  grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-4  `}>
      {accounts.map((acc) => (
        <AccountCard account={acc} />
      ))}
{accounts.length == 0 && <div className="text-white  text-center">Crie suas contas no botão abaixo </div>}
      {/* Botão toggle fixo */}
      <div className="fixed bottom-22 right-7 flex flex-col items-end space-y-2 z-50 ">
        {/* Menu suspenso */}

        {menuOpen && (
          <div className="mb-2 flex flex-col bg-black bg-opacity-80 rounded-lg shadow-lg w-40 text-white text-center">
            <a
              href="/account/new"
              className="py-2 hover:bg-gray-700 transition rounded-t-lg"
              onClick={() => setMenuOpen(false)}
            >
              Nova Conta
            </a>
            <a
              href="/transfer"
              className="py-2 hover:bg-gray-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Nova Transação
            </a>
            <a
              href="/account-types"
              className="py-2 hover:bg-gray-700 transition rounded-b-lg"
              onClick={() => setMenuOpen(false)}
            >
              Tipos de Conta
            </a>
          </div>
        )}

        {/* Botão que abre/fecha o menu */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 "
          aria-label="Abrir menu"
        >
        <FaPlus color={colors.black} />


        </button>
      </div>
    </main>
  );
}
