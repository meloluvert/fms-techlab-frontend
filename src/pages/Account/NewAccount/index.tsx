import { useEffect, useState } from "react";
import { FormInput } from "../../../components/FormInput";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { FaCheck, FaTrash } from "react-icons/fa";
import { axiosPrivate } from "../../../services/api";
import type { IAccountType } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../components/Loading";

export function NewAccount() {
  const navigate = useNavigate();

  const [accountTypes, setAccountTypes] = useState<IAccountType[]>([]);
  const [loadingTypes, setLoadingTypes] = useState(true);
  const [errorTypes, setErrorTypes] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    type_id: "",
    balance: "",
    color: "#ffffff",
    description: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  // Busca tipos de conta ao montar
  useEffect(() => {
    setLoadingTypes(true);
    setErrorTypes(null);
    axiosPrivate
      .get("/account-types")
      .then((res) => {
        setAccountTypes(res.data);
        setLoadingTypes(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorTypes("Erro ao buscar tipos de conta.");
        setLoadingTypes(false);
      });
  }, []);

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
    if (form.balance === "") {
      setError("O saldo é obrigatório (pode ser 0).");
      return;
    }
    if (isNaN(Number(form.balance))) {
      setError("Saldo inválido.");
      return;
    }

    setLoadingSubmit(true);

    try {
      await axiosPrivate.post("/accounts", {
        name: form.name,
        type_id: form.type_id,
         balance: Math.round(Number(form.balance) * 100),
        description: form.description,
        color: form.color,
      });
      navigate("/");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Erro ao criar conta.");
    } finally {
      setLoadingSubmit(false);
    }
  };

  if (loadingTypes || loadingSubmit) return <Loading />;
  if (errorTypes) return <div className="text-red-500">{errorTypes}</div>;

  return (
    <form
      className="w-full rounded-2xl md:max-w-140 p-5"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-white text-left">Nova Conta</h2>

      {error && <div className="text-red-500 mb-2">{error}</div>}

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
            className=" rounded-5xl text-white max-w-10"
          />
        </div>
      </div>
      <FormInput
        name="balance"
        type="number"
        label="Saldo"
        placeholder="R$ 0.00"
        step="0.01"
        value={form.balance}
        onChange={handleChange}
      />

      <label
        htmlFor="description"
        className="text-white font-bold text-sm mb-1 block"
      >
        Descrição
      </label>
      <textarea
        style={{ resize: "none" }}
        className="w-full bg-black rounded-2xl text-white p-1"
        rows={5}
        id="description"
        name="description"
        placeholder="Descrição da conta (opcional)"
        value={form.description}
        onChange={handleChange}
      />

      <div className="py-5 flex flex-col gap-2 sm:flex-row">
        <LargeButton
          text={"Criar Conta"}
          color={colors.buttonBlue}
          icon={<FaCheck />}
          type="submit"
        />

        <LargeButton
          text="Cancelar"
          icon={<FaTrash />}
          color={colors.buttonRed}
          route="/"
          type="button"
        />
      </div>
    </form>
  );
}
