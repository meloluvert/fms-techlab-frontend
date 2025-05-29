import { FaTrash, FaSignOutAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FormInput } from "../../../../components/FormInput";
import { LargeButton } from "../../../../components/Buttons/LargeButton";
import { colors } from "../../../../styles/colors";
import { Loading } from "../../../../components/Loading";
import { useProfile } from "./scripts";

export function Profile() {
  const {
    userInfo,
    loading,
    deleting,
    handleDeleteAccount,
    handleLogout,
  } = useProfile();

  if (loading) return <Loading />;
  if (!userInfo) return <div>Não foi possível carregar o perfil.</div>;

  return (
    <form className="w-90 min-h-full mx-auto p-6 bg-zinc-900 rounded-2xl text-white space-y-4 shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center">Perfil</h2>
      <div className="space-y-2">
        <FormInput
          name="name"
          value={userInfo.name}
          type="text"
          placeholder="João da Silva Santos"
          label="Nome"
          readonly={true}
        />
        <FormInput
          name="email"
          value={userInfo.email}
          type="text"
          placeholder="joao@email.com"
          label="Email"
          readonly={true}
        />
        <FormInput
          name="password"
          value="*********"
          type="password"
          placeholder="*********"
          label="Senha"
          readonly={true}
        />
      </div>

      <LargeButton
        color={colors.buttonBlue}
        text="Editar"
        route="/profile/edit"
        icon={<MdEdit color={colors.white} size={20} />}
      />
      <LargeButton
        color={colors.black}
        text="Sair"
        icon={<FaSignOutAlt color={colors.white} size={20} />}
        onClick={handleLogout}
        type="button"
      />
      <LargeButton
        color={colors.buttonRed}
        text={deleting ? "Excluindo..." : "Excluir Conta"}
        icon={<FaTrash color={colors.white} size={20} />}
        onClick={handleDeleteAccount}
        type="button"
      />
    </form>
  );
}
