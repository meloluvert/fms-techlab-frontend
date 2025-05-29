import { useNavigate } from "react-router-dom";
import { useNewAccount } from "./scripts";
import { Loading } from "../../../components/Loading";
import { FormInput } from "../../../components/FormInput";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { FaCheck, FaTrash } from "react-icons/fa";

export function NewAccount() {
  const navigate = useNavigate();

  const {
    accountTypes,
    loadingTypes,
    errorTypes,
    form,
    error,
    loadingSubmit,
    handleChange,
    handleSubmit,
  } = useNewAccount();

  if (loadingTypes || loadingSubmit) return <Loading />;
  if (errorTypes) return <div className="text-red-500">{errorTypes}</div>;

  return (
    <form
      className="w-full rounded-2xl md:max-w-140 p-5"
      onSubmit={(e) => handleSubmit(e, navigate)}
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
