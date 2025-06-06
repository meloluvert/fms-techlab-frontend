import { useParams, useNavigate } from "react-router-dom";
import { useEditAccount } from "./scripts";
import { Loading } from "../../../components/Loading";
import { FormInput } from "../../../components/FormInput";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { FaCheck, FaTrash } from "react-icons/fa";

export function EditAccount() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    accountTypes,
    account,
    loading,
    error,
    form,
    handleChange,
    handleSubmit,
  } = useEditAccount(id);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!account) return <div>Conta não encontrada.</div>;

  return (
    <form
      className="w-full lg:max-w-160 rounded-2xl p-5"
      onSubmit={(e) => handleSubmit(e, navigate)}
    >
      <h2 className="text-2xl font-bold text-white text-left">Editar Conta</h2>

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
        htmlFor="balance"
        className="text-white font-bold text-sm mb-1 block"
      >
        Saldo
      </label>
      <input
        type="number"
        id="balance"
        name="balance"
        step="0.01"
        placeholder="R$ 0.00"
        value={form.balance}
        onChange={handleChange}
        className="w-full rounded-2xl bg-black text-white p-2"
      />

      <label htmlFor="description" className="text-white text-sm mb-1 block">
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
          text={"Editar Conta"}
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
