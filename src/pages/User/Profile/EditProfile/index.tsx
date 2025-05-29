import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCheck, MdEdit, MdCancel } from "react-icons/md";
import { FormInput } from "../../../../components/FormInput";
import { axiosPrivate } from "../../../../services/api";
import { colors } from "../../../../styles/colors";
import { Loading } from "../../../../components/Loading";
import { useAuth } from "../../../../contexts/auth";
import { LargeButton } from "../../../../components/Buttons/LargeButton";

export function ProfileEdit() {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axiosPrivate
      .get("/user")
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch(() => {
        setError("Erro ao carregar dados do usuário.");
      })
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <Loading />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Nome é obrigatório.");
      return;
    }
    if (!email.trim()) {
      setError("Email é obrigatório.");
      return;
    }

    setSaving(true);
    try {
      await axiosPrivate.put("/user", { name, email });
      navigate("/profile");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Erro ao atualizar perfil.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-zinc-900 rounded-2xl text-white space-y-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center">Editar Perfil</h2>

      {error && <div className="text-red-500 text-center">{error}</div>}

      <FormInput
        label="Nome"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome"
      />

      <FormInput
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
      />

      <div className="flex flex-col justify-between items-center gap-2">
        <LargeButton
          type="submit"
          color={colors.buttonGreen}
          icon={<MdCheck color={colors.white} size={20} />}
          text={saving ? "Salvando..." : "Confirmar"}
        />

        <LargeButton
          color={colors.buttonBlue}
          icon={<MdEdit color={colors.white} size={20} />}
          text="Editar Senha"
          route="/profile/edit/password"
        />

        <LargeButton
          color={colors.buttonRed}
          icon={<MdCancel color={colors.white} size={20} />}
          text="Cancelar"
          route="/profile"
        />
      </div>
    </form>
  );
}
