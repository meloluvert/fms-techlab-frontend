import { useState } from "react";
import { axiosPrivate } from "../../../../services/api";
import { useNavigate } from "react-router-dom";

export function useProfileEditPassword() {
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
      setError(err?.response?.data?.message || "Erro ao atualizar senha.");
    } finally {
      setSaving(false);
    }
  };

  return {
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
  };
}
