import { MdCheck, MdCancel } from "react-icons/md";
import { FormInput } from "../../../../components/FormInput";
import { LargeButton } from "../../../../components/Buttons/LargeButton";
import { colors } from "../../../../styles/colors";
import { useProfileEditPassword } from "./scripts";

export function ProfileEditPassword() {
  const {
    currentPassword,
    setCurrentPassword,
    confirmCurrentPassword,
    setConfirmCurrentPassword,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    error,
    saving,
    handleSubmit,
  } = useProfileEditPassword();

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-zinc-900 rounded-2xl text-white space-y-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Editar Senha</h2>

      {error && <div className="text-red-500 text-center">{error}</div>}

      <FormInput
        label="Senha Atual"
        name="currentPassword"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        placeholder="Digite sua senha atual"
      />

      <FormInput
        label="Confirme a Senha Atual"
        name="confirmCurrentPassword"
        type="password"
        value={confirmCurrentPassword}
        onChange={(e) => setConfirmCurrentPassword(e.target.value)}
        placeholder="Confirme sua senha atual"
      />

      <FormInput
        label="Nova Senha"
        name="newPassword"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Digite a nova senha"
      />

      <FormInput
        label="Confirme a Nova Senha"
        name="confirmNewPassword"
        type="password"
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
        placeholder="Confirme a nova senha"
      />

      <div className="flex justify-between items-center gap-2">
        <LargeButton
          type="submit"
          color={colors.buttonBlue}
          icon={<MdCheck color={colors.white} size={20} />}
          text={saving ? "Salvando..." : "Confirmar"}
        />
        <LargeButton
          color={colors.buttonRed}
          icon={<MdCancel color={colors.white} size={20} />}
          text="Cancelar"
          route="/profile/edit"
        />
      </div>
    </form>
  );
}
