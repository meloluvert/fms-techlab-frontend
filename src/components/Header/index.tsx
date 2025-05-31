import type { INav } from "../Footer";
import { Nav } from "../Nav";
import { useAuth } from "../../contexts/auth";
import { SmallButton } from "../Buttons/SmallButton";
import { colors } from "../../styles/colors";
import { FaSignOutAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
export function Header({ page }: INav) {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);
  const {logout} = useAuth();
  return (
    <header className="flex flex-row bg-black text-golden  px-5 py-3 static">
      <div className="w-full flex flex-row justify-between md:justify-start">
        <div className="w-1/3 h-fit my-0 px-2 text-4xl md:w-fit">
          <a href="/"> FMS </a>
        </div>
        <div className="border-l-golden border-l-4 w-2/3 flex items-center justify-around md:w-fit md:px-3">
          <span className="text-right h-fit inline-block  px-0.2 text-xs sm:text-xl">
            <a href="/">Financial Management System</a>
          </span>
        </div>
      </div>
      <div className={ ` ${isAuthPage ? 'md:hidden' : ''} hidden md:block `}>
        <Nav page={page} />
      </div>
      <div className={ ` ${isAuthPage ? 'md:hidden hidden' : ''}  `}>

      <SmallButton color={colors.bgRed} onClick={() => logout()} icon={<FaSignOutAlt color={colors.white} size={18} />}/>
      </div>
    </header>
  );
}
