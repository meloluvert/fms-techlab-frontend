import { AccountCard } from "../../components/AccountCard";
import { contaX } from "../../App";
import { useAuth } from "../../contexts/auth";

export function Home() {
  const { user, token } = useAuth();

  const handleTestClick = () => {
    console.log("User:", user);
    console.log("Token:", token);
    alert(
      `User: ${user ? JSON.stringify(user, null, 2) : "null"}\nToken: ${token || "null"}`
    );
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-4 ">
      <AccountCard account={contaX} />
      <AccountCard account={contaX} />
      <AccountCard account={contaX} />
      <AccountCard account={contaX} />
      <AccountCard account={contaX} />
      <AccountCard account={contaX} />
      <AccountCard account={contaX} />
      <button className="text-gray bg-golden text-lg fixed bottom-7 right-7 p-2 font-semibold border rounded">
        <a href="conta/nova/">Nova Conta</a>
      </button>
      <button
        className="bg-blue-600 text-white fixed bottom-20 right-7 p-2 rounded"
        onClick={handleTestClick}
      >
        Testar user/token
      </button>
    </main>
  );
}
