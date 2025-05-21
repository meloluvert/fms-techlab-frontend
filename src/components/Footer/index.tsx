
import { FaHome } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import { colors } from "../../styles/colors";


export interface IFooter{
    page:string
}
const iconSize = 32
export function Footer({page}:IFooter) {
    return (
        <footer className="w-full p-2 w-1-4 bg-black flex fixed bottom-0 justify-around">
            <div className="flex px-2 flex-col align-middle justify-center">
                <div className="flex align-middle justify-center w-full">
                    <FaHome size={iconSize} color={page == 'home' ? colors.white : colors.disabled} />
                </div>
                <span className={`${page == 'home' ? 'text-white font-semibold' : 'text-disabled'} text-xl text-center `}>
                    Início
                </span>
            </div>
            <div className="flex px-2 w-1-4 flex-col align-middle justify-center">
                <div className="flex align-middle justify-center w-full">
                    <GoArrowSwitch size={iconSize} color={page == 'transacoes' ? colors.white : colors.disabled} />
                </div>
                <span className={`${page == 'transacoes' ? 'text-white font-semibold' : 'text-disabled'} text-xl text-center `}> Transações</span>
            </div>
            <div className="flex px-2 w-1-4 flex-col align-middle justify-center">
                <div className="flex align-middle justify-center w-full">
                    <MdPerson size={iconSize} color={page == 'perfil' ? colors.white : colors.disabled} />
                </div>
                <span className={`${page == 'perfil' ? 'text-white font-semibold' : 'text-disabled'} text-xl text-center `}>Perfil</span>
            </div>

        </footer>
    )

}