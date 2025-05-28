import { useEffect, useState } from "react";
import { FaTrash, FaSignOutAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FormInput } from "../../../../components/FormInput";
import { LargeButton } from "../../../../components/Buttons/LargeButton";
import { colors } from "../../../../styles/colors";
import { axiosPrivate } from "../../../../services/api";
import type { IUser } from "../../../../interfaces";
import { Loading } from "../../../../components/Loading";
import { useAuth } from "../../../../contexts/auth";
import { useNavigate } from "react-router-dom";

export function Profile() {
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

  if (loading) return <Loading />;
  if (!userInfo) return <div>Não foi possível carregar o perfil.</div>;

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
