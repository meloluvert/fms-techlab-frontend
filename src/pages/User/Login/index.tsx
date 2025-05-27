import { useState } from "react";
import { FormInput } from "../../../components/FormInput";
import { colors } from "../../../styles/colors";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../components/Loading";
import { useAuth } from "../../../contexts/auth"; // aqui

export function Login() {
  const navigate = useNavigate();
  const { login, user, token } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        navigate("/");
      } else {
        setError("Email ou senha inválidos.");
      }
    } catch (err) {
      setError("Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loading/>
  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="w-90 mt-2 min-h-full mx-auto p-6 bg-zinc-900 rounded-2xl text-white space-y-4 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white text-center">
        Bem vindo de volta!
      </h2>

      <FormInput
        name="email"
        label="Email"
        placeholder="seuemail@dom.com"
        type="text"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormInput
        name="password"
        label="Senha"
        placeholder="*********"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      {error && (
        <div className="text-red-500 text-center font-semibold">{error}</div>
      )}

      <LargeButton
        color={colors.buttonBlue}
        text={"Entrar"}
        icon={<FaCheck color={colors.white} size={20} />}
      />

      <div className="underline flex flex-col text-sm items-end ">
        <span>
          <a href="/register">Não é cadastrado? Clique aqui</a>
        </span>
      </div>
    </form>
  );
}
