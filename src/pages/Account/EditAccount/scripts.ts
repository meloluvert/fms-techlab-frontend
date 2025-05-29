import { useEffect, useState } from "react";
import { axiosPrivate } from "../../../services/api";
import type { IAccountType, IAccount } from "../../../interfaces";

export function useEditAccount(id: string | undefined) {
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

  const handleSubmit = async (
    e: React.FormEvent,
    navigate: (path: string) => void,
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

    setLoading(true);

    try {
      await axiosPrivate.put(`/accounts/${id}`, {
        name: form.name,
        type_id: form.type_id,
        description: form.description,
        color: form.color,
      });
      navigate(`/account/${id}`);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Erro ao atualizar conta.");
    } finally {
      setLoading(false);
    }
  };

  return {
    accountTypes,
    account,
    loading,
    error,
    form,
    handleChange,
    handleSubmit,
  };
}
