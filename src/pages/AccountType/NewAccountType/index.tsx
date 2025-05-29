import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../../../services/api";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { Loading } from "../../../components/Loading";

export function NewAccountType() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("O nome do tipo de conta é obrigatório.");
      return;
    }

    setLoading(true);
    try {
      await axiosPrivate.post("/account-types", { name });
      navigate("/account-types");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Erro ao criar tipo de conta.");
    } finally {
      setLoading(false);
    }
  };
  if(loading) return <Loading/>

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-black rounded-xl shadow-md"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Novo Tipo de Conta</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <label className="block text-white font-semibold mb-2" htmlFor="name">
        Nome
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Ex: Poupança"
      />

      <div className="mt-6 flex justify-end">
        <LargeButton
          text="Criar"
          color={colors.buttonBlue}
          type="submit"
        />
      </div>
    </form>
  );
}
