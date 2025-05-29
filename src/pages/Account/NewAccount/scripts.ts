import { useEffect, useState } from "react";
import { axiosPrivate } from "../../../services/api";
import type { IAccountType } from "../../../interfaces";

export function useNewAccount() {
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

  useEffect(() => {
    setLoadingTypes(true);
    setErrorTypes(null);
    axiosPrivate
      .get("/account-types")
      .then((res) => {
        setAccountTypes(res.data);
        setLoadingTypes(false);
      })
      .catch(() => {
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

  const handleSubmit = async (
    e: React.FormEvent,
    navigate: (path: string) => void
  ) => {
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

  return {
    accountTypes,
    loadingTypes,
    errorTypes,
    form,
    error,
    loadingSubmit,
    handleChange,
    handleSubmit,
  };
}
