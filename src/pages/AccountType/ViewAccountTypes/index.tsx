import { useEffect, useState } from "react";
import { axiosPrivate } from "../../../services/api";
import { AccountTypeCard } from "../../../components/AccountTypeCard";
import { Loading } from "../../../components/Loading";
import { FaPlus } from "react-icons/fa";
import { colors } from "../../../styles/colors";
interface IAccountType {
  id: string;
  name: string;
}

export function AccountTypes() {
  const [accountTypes, setAccountTypes] = useState<IAccountType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axiosPrivate
      .get("/account-types")
      .then((res) => {
        console.log(res.data)
        setAccountTypes(res.data);
      })
      .catch(() => {
        setError("Erro ao carregar tipos de conta.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axiosPrivate.delete(`/account-types/${id}`);
      setAccountTypes((prev) => prev.filter((type) => type.id !== id));
    } catch (error: any) {

      alert(error?.response?.data?.message);
        alert("Erro ao excluir tipo de conta. Verifique se não existem contas associadas.");
    }
  };
  

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {accountTypes.map((type) => (
        <AccountTypeCard key={type.id} accountType={type} onDelete={handleDelete} />
      ))}
      <button className="text-gray bg-golden text-lg fixed bottom-7 right-7 p-2 font-semibold border rounded">
 <a href="/account-types/new"><FaPlus color={colors.black} /></a>
</button>
    </div>
  );
}
