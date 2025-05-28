import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosPrivate } from "../../../services/api";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { Loading } from "../../../components/Loading";

export function EditAccountType() {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axiosPrivate
      .get(`/account-types/${id}`)
      .then((res) => {
        setName(res.data.name);
      })
      .catch(() => {
        setError("Erro ao carregar tipo de conta.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("O nome do tipo de conta é obrigatório.");
      return;
    }

    setSaving(true);
    try {
      await axiosPrivate.put(`/account-types/${id}`, { name });
      navigate("/account-types");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Erro ao atualizar tipo de conta.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-black rounded-xl shadow-md"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Editar Tipo de Conta</h2>

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
          text="Salvar"
          color={colors.buttonBlue}
          type="submit"
        />
      </div>
    </form>
  );
}
