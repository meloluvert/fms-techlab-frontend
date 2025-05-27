import { FaCheck, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FormInput } from "../../../../components/FormInput";
import { LargeButton } from "../../../../components/Buttons/LargeButton";
import { colors } from "../../../../styles/colors";
import type { IUser } from "../../../../interfaces";

export function EditProfile() {
  return (
    <form
      method="post"
      className="w-90 min-h-full  mx-auto p-6 bg-zinc-900 rounded-2xl text-white space-y-4 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white text-center">Perfil</h2>
      

      <div className="space-y-2">
        <FormInput
          name={"name"}
          value={userInfo.name}
          type={"text"}
          placeholder={"João da Silva Santos"}
          label={"Nome"}
        />
        <FormInput
          name={"email"}
          value={userInfo.email}
          type={"text"}
          placeholder={"joao@email.com"}
          label={"Email"}
        />
        <div>
          <FormInput
            name={"password"}
            type={"password"}
            placeholder={"*********"}
            label={"Senha"}

          />
        </div>
      </div>
      <LargeButton
        color={colors.buttonBlue}
        text="Salvar Alterações"
        icon={<FaCheck color={colors.white} size={20} />}
      />
      <LargeButton
        color={colors.buttonRed}
        text="Excluir Conta"
        icon={<FaTrash color={colors.white} size={20} />}
      />
    </form>
  );
}
