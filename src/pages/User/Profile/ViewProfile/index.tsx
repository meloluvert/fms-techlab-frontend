import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FormInput } from "../../../../components/FormInput";
import { LargeButton } from "../../../../components/Buttons/LargeButton";
import { colors } from "../../../../styles/colors";
import { axiosPrivate } from "../../../../services/api";
import type { IUser } from "../../../../interfaces";
import { Loading } from "../../../../components/Loading";
import { useAuth } from "../../../../contexts/auth";

export function Profile() {
  const { token } = useAuth();
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

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
        color={colors.buttonRed}
        text="Excluir Conta"
        icon={<FaTrash color={colors.white} size={20} />}
      />
    </form>
  );
}
