import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCheck, MdCancel } from "react-icons/md";
import { FormInput } from "../../../../components/FormInput";
import { axiosPrivate } from "../../../../services/api";
import { colors } from "../../../../styles/colors";
import { LargeButton } from "../../../../components/Buttons/LargeButton";

export function ProfileEditPassword() {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmCurrentPassword, setConfirmCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!currentPassword.trim() || !confirmCurrentPassword.trim()) {
      setError("Preencha a senha atual e sua confirmação.");
      return;
    }
    if (currentPassword !== confirmCurrentPassword) {
      setError("A senha atual e sua confirmação não coincidem.");
      return;
    }
    if (!newPassword.trim() || !confirmNewPassword.trim()) {
      setError("Preencha a nova senha e sua confirmação.");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setError("A nova senha e sua confirmação não coincidem.");
      return;
    }
    if (newPassword.length < 6) {
      setError("A nova senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setSaving(true);
    try {
      await axiosPrivate.put("/user/", {
        password: currentPassword,
        newPassword: newPassword,
      });
      alert("Senha atualizada com sucesso!");
      navigate("/profile");
    } catch (err: any) {
        console.log(err?.response?.data?.message)
      setError(err?.response?.data?.message || "Erro ao atualizar senha.");
    } finally {
      setSaving(false);
    }
  };

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
