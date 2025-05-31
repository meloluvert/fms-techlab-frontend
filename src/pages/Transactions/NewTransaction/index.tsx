import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FormInput } from "../../../components/FormInput";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { TransferTable } from "../../../components/TransferTable";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { colors } from "../../../styles/colors";
import { axiosPrivate } from "../../../services/api";
import type { IAccount } from "../../../interfaces";
import { Loading } from "../../../components/Loading";
export function NewTransaction() {
  function parseMoneyInput(value: string | number): number {
    if (typeof value === "number") return value;
    const normalized = value.trim().replace(/\./g, "").replace(",", ".");
    const parsed = Number(normalized);
    return isNaN(parsed) ? 0 : parsed;
  }

  const { id } = useParams(); // id da conta fixa, se existir
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [fromId, setFromId] = useState<string | undefined>(undefined);
  const [toId, setToId] = useState<string | undefined>(undefined);
  const [value, setValue] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");

  const isFixedFrom = id && id !== "new";

  useEffect(() => {
    setLoading(true);
    axiosPrivate
      .get("/accounts")
      .then((res) => {
        setAccounts(res.data);

        if (isFixedFrom && res.data.some((acc: IAccount) => acc.id === id)) {
          setFromId(id);
          const firstOther = res.data.find((acc: IAccount) => acc.id !== id);
          setToId(firstOther ? firstOther.id : undefined);
        } else {
          // Caso id seja "new" ou inválido, libera seleção completa
          setFromId(res.data[0]?.id);
          setToId(res.data[1]?.id);
        }
      })
      .catch(() => {
        setError("Erro ao buscar contas.");
        setAccounts([]);
      })
      .finally(() => setLoading(false));
  }, [id, isFixedFrom]);

  // Atualiza o toId automaticamente quando fromId mudar para evitar duplicidade
  useEffect(() => {
    if (!fromId) return;

    // Se toId for igual a fromId, ou toId não existir, tenta atualizar para outra conta válida
    if (toId === fromId || !toId) {
      const firstOther = accounts.find((acc) => acc.id !== fromId);
      setToId(firstOther ? firstOther.id : undefined);
    }
  }, [fromId, toId, accounts]);

  const fromAccount = accounts.find((acc) => acc.id === fromId);
  const toAccount = accounts.find((acc) => acc.id === toId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fromId || !toId) {
      setError("Selecione as contas de origem e destino.");
      return;
    }
    if (fromId === toId) {
      setError("As contas de origem e destino devem ser diferentes.");
      return;
    }
    if (!value || value <= 0) {
      setError("Informe um valor válido para a transferência.");
      return;
    }

    try {
      await axiosPrivate.post("/transactions", {
        amount: Math.round(value * 100),
        originAccount: { id: fromId },
        destinationAccount: { id: toId },
        description,
      });
      navigate("/");
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "Erro ao realizar transferência."
      );
    }
  };

  if (loading) return <Loading />;
  if (!accounts.length)
    return <div className="text-white">Nenhuma conta encontrada.</div>;
  if (accounts.length === 1)
    return (
      <div className="text-white">
        Você precisa de pelo menos duas contas para realizar transferências.
      </div>
    );

  return (
    <form
      className="w-full rounded-2xl md:max-w-160 p-5"
      method="POST"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-white text-left">
        Nova transação
      </h2>

      {error && <div className="text-red-500 mb-2">{error}</div>}

      <div className="flex flex-row items-center gap-2">
        <div className="flex-1">
          <FormInput
            name="from"
            label="De"
            type="select"
            value={fromId}
            options={
              isFixedFrom ? accounts.filter((acc) => acc.id === id) : accounts // todas as contas disponíveis
            }
            onChange={(e) => setFromId(e.target.value)}
            disabled={isFixedFrom ? true : false}
          />
        </div>

        <FaArrowRightLong className="mx-2" color={colors.white} size={24} />

        <div className="flex-1">
          <FormInput
            name="to"
            label="Para"
            type="select"
            value={toId}
            options={accounts.filter((acc) => acc.id !== fromId)}
            onChange={(e) => setToId(e.target.value)}
          />
        </div>
      </div>

      <FormInput
        name="valor"
        label="Valor"
        type="number"
        step="0.01"
        value={value}
        onChange={(e) => setValue(parseMoneyInput(e.target.value))}
        placeholder="Valor da transferência"
      />

      <div className="my-4">
        <label
          htmlFor="description"
          className="text-white font-bold text-sm mb-1 block"
        >
          Descrição
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          style={{ resize: "none" }}
          className="w-full bg-black rounded-2xl text-white p-2"
          placeholder="Descrição da transferência (opcional)"
        />
      </div>

      {fromAccount && toAccount && (
        <TransferTable
          fromName={fromAccount.name}
          toName={toAccount.name}
          fromBalance={parseMoneyInput(fromAccount.balance)}
          toBalance={parseMoneyInput(toAccount.balance)}
          transferValue={value}
        />
      )}

      <div className="py-5 flex flex-col sm:flex-row gap-2">
        <LargeButton
          text="Realizar transferência"
          color={colors.bgGreen}
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
