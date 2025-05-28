import { useEffect, useState } from "react";
import { FormInput } from "../../../components/FormInput";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { FaCheck, FaTrash } from "react-icons/fa";
import type { IAccountType, IAccount } from "../../../interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { axiosPrivate } from "../../../services/api";
import { Loading } from "../../../components/Loading";

export function EditAccount() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [accountTypes, setAccountTypes] = useState<IAccountType[]>([]);
  const [account, setAccount] = useState<IAccount | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    type_id: "",
    description: "",
    color: "#ffffff",
  });

  useEffect(() => {
    if (!id) {
      setError("ID da conta não fornecido.");
      setLoading(false);
      return;
    }

    setLoading(true);
    Promise.all([
      axiosPrivate.get(`/accounts/${id}`),
      axiosPrivate.get("/account-types"),
    ])
      .then(([accountRes, typesRes]) => {
        setAccount(accountRes.data);
        setAccountTypes(typesRes.data);
        setForm({
          name: accountRes.data.name,
          type_id: accountRes.data.type.id,
          description: accountRes.data.description,
          color: accountRes.data.color,
        });
      })
      .catch((err: any) => {
        setError(err?.response?.data?.message || "Erro ao buscar dados.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) {
      setError("O nome da conta é obrigatório.");
      return;
    }
    if (!form.type_id) {
      setError("O tipo da conta é obrigatório.");
      return;
    }

    setLoading(true);

    try {
      await axiosPrivate.put(`/accounts/${id}`, {
        name: form.name,
        type_id: Number(form.type_id), // ajuste para o formato do backend
        description: form.description,
        color: form.color,
      });
      navigate(`/account/${id}`); // redireciona para a página de detalhes
    } catch (err: any) {
      setError(err?.response?.data?.message || "Erro ao atualizar conta.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading/>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!account) return <div>Conta não encontrada.</div>;

  return (
    <form
      className="w-full lg:max-w-160 rounded-2xl p-5"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-white text-left">
        Editar Conta
      </h2>

      {error && <div className="text-red-500">{error}</div>}

      <FormInput
        name="name"
        type="text"
        label="Nome"
        placeholder="Poupança"
        value={form.name}
        onChange={handleChange}
      />

      <div className="w-full flex">
        <div className="w-1/2">
          <FormInput
            name="type_id"
            options={accountTypes}
            type="select"
            label="Tipo"
            placeholder="Tipo"
            value={form.type_id}
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2 flex flex-col px-2 justify-center">
          <label
            htmlFor="color"
            className="text-white font-bold text-sm mb-1 block"
          >
            Cor da conta
          </label>
          <input
            type="color"
            value={form.color}
            onChange={handleChange}
            name="color"
            id="color"
            className="rounded-5xl text-white max-w-10"
          />
        </div>
      </div>

      <label
        htmlFor="description"
        className="text-white text-sm mb-1 block"
      >
        Descrição
      </label>
      <textarea
        style={{ resize: "none" }}
        className="w-full bg-black rounded-2xl text-white p-1"
        rows={5}
        id="description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <div className="py-5 flex flex-col gap-2">
        <LargeButton
          text={ "Editar Conta"}
          color={colors.buttonBlue}
          icon={<FaCheck />}
          type="submit"
        />

        <LargeButton
          text="Cancelar"
          icon={<FaTrash />}
          color={colors.buttonRed}
          route={`/account/${id}`} // redireciona para a página de detalhes
        />
      </div>
    </form>
  );
}
