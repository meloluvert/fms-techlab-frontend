import { FormInput } from "../../../components/FormInput";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { FaCheck, FaTrash } from "react-icons/fa";
import type { IAccountType } from "../../../interfaces";
import type { IAccount } from "../../../interfaces";
export function EditAccount({account, accountTypes}:{account:IAccount,accountTypes:IAccountType[]}) {
  return (
    <form className="w-full lg:max-w-160 rounded-2xl p-5" action="">
      <h2 className="text-2xl font-bold text-white text-left">Nova Conta</h2>
      <FormInput
        name={"name"}
        type="text"
        label="Nome"
        placeholder="Poupança"
        value={account.name}
      />

      <FormInput
        name={"type"}
        options={accountTypes}
        type="select"
        label="Tipo"
        placeholder="Tipo"
        value={accountTypes[0].name}

      />

<FormInput
        name={"balance"}
        type="number"
        label="Saldo"
        placeholder="R$ 0.00"
        step="0.01"
        value={account.balance}
      />
      <label htmlFor="description" className="text-white text-sm mb-1">
        Descrição
      </label>
      <textarea
        style={{ resize: "none" }}
        className="w-full bg-black rounded-2xl text-white p-1"
        rows={5}
        value={account.description}
        id="description"
        name="description"
      />
      <div className=" py-5 flex flex-col gap-2">
        <LargeButton
          text="Editar Conta"
          color={colors.buttonBlue}
          icon={<FaCheck />}
          route=""
        />

        <LargeButton
          text="Cancelar"
          icon={<FaTrash />}
          color={colors.buttonRed}
          route="/"
        />
      </div>
    </form>
  );
}
