import { AccountCard } from "../../components/AccountCard";
import { contaX } from "../../App";
export function Home() {
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
    </main>
  );
}
