
import { FormInput } from "../../components/FormInput";
import { colors } from "../../styles/colors";
import { LargeButton } from "../../components/LargeButton";
export function Login(){
  return(
    <form method="post" className="w-90 mt-2 min-h-full mx-auto p-6 bg-zinc-900 rounded-2xl text-white space-y-4 shadow-lg">

        <h2 className="text-2xl font-bold text-white text-center">Bem vindo de volta!</h2>
        <FormInput name="email" label="Email" placeholder="seuemail@dom.com" type="text" />
        <FormInput name="password" label="Senha" placeholder="*********" type="password" />
        <LargeButton color={colors.buttonBlue} text="Entrar"  />
        <div className="underline flex flex-col text-sm items-end ">
            <span> <a href="/cadastro">Não é cadastrado? Clique Aqui</a></span>
        </div>
    </form>
  )
    
}