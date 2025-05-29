import { useEffect, useState } from "react";
import { axiosPrivate } from "../../../../services/api";
import type { IUser } from "../../../../interfaces";
import { useAuth } from "../../../../contexts/auth";
import { useNavigate } from "react-router-dom";

export function useProfile() {
  const { token, logout } = useAuth();
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axiosPrivate
      .get("/user")
      .then((res) => setUserInfo(res.data))
      .catch((err) => {
        setUserInfo(null);
        console.error("Erro ao buscar perfil:", err);
      })
      .finally(() => setLoading(false));
  }, [token]);

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir sua conta? Essa ação é irreversível."
    );
    if (!confirmed) return;

    setDeleting(true);
    try {
      await axiosPrivate.delete("/user");
      logout();
      navigate("/login");
    } catch (error) {
      alert("Erro ao excluir a conta. Tente novamente mais tarde.");
      console.error(error);
    } finally {
      setDeleting(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return {
    userInfo,
    loading,
    deleting,
    handleDeleteAccount,
    handleLogout,
  };
}
