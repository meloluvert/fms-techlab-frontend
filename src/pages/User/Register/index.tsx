import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FormInput } from "../../../components/FormInput";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { axiosPrivate } from "../../../services/api";

export function Register() {
  // Estado para controlar os inputs do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  // Envia os dados para a API no submit do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axiosPrivate.post("user/register", formData);
      const { token } = response.data;
      localStorage.setItem("token", token);

      // Aqui você pode redirecionar o usuário para outra página, ex: dashboard
      window.location.href = "/";
    } catch (err: any) {
      // Trate o erro conforme sua API retorna
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Erro ao criar conta. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      method="post"
      className="w-90 min-h-full mx-auto p-6 bg-zinc-900 rounded-2xl text-white space-y-4 shadow-lg"
      onSubmit={handleSubmit} // adiciona o onSubmit
    >
      <h2 className="text-2xl font-bold text-white text-center">
        Crie sua conta
      </h2>

      <div className="space-y-2">
        <FormInput
          name="name"
          type="text"
          placeholder="João da Silva Santos"
          label="Nome"
          value={formData.name} // controla o valor
          onChange={handleChange} // atualiza o estado
          required={true}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="joao@email.com"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <div>
          <FormInput
            name="password"
            type="password"
            placeholder="*********"
            label="Senha"
            value={formData.password}
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-center font-semibold">{error}</div>
      )}
      <LargeButton
        color={colors.buttonBlue}
        text="Criar Conta"
        icon={<FaCheck color={colors.white} size={20}
        type="submit" 
        />}

      />
      <div className="underline flex flex-col text-sm items-end ">
        <span>
          <a href="/login">Já é cadastrado? Clique aqui</a>
        </span>
      </div>
    </form>
  );
}
