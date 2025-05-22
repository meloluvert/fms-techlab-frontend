import { FormInput } from "../../../components/FormInput"
import { LargeButton } from "../../../components/LargeButton"
import { accounts } from "../../Transactions/NewTransaction"
import { colors } from "../../../styles/colors"
import { FaCheck, FaTrash } from "react-icons/fa"
export function NewAccount() {

    return (
        <form className="w-full  rounded-2xl p-5" action="">
            <h2 className="text-2xl font-bold text-white text-left">Nova Conta</h2>
            <FormInput name={"name"} type="text" label="Nome" placeholder="Poupança" />

            <FormInput name={"type"} options={accounts} type="select" label="Tipo" placeholder="Tipo" />
            <label htmlFor="description" className="text-white text-sm mb-1">Descrição</label>
            <textarea style={{ resize: 'none' }} className="w-full bg-black rounded-2xl text-white p-1" rows={5} id="description" name="description" />
            <div className=" py-5 flex flex-col gap-2">
                <LargeButton
                    text="Criar Conta"
                    color={colors.buttonBlue}
                    icon={<FaCheck />}
                />

                <LargeButton
                    text="Cancelar"
                    icon={<FaTrash />}
                    color={colors.buttonRed}
                    route="/"
                />
            </div>
        </form>
    )
}