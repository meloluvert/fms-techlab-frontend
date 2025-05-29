import { useState } from "react";
import type { INav } from "../Footer";
import { FaHome } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import { colors } from "../../styles/colors";
const iconSize = 32;

export function Nav({ page }: INav) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:static">
      {/* Botão toggle visível só em md e lg:hidden */}
      <div className="hidden md:block lg:hidden text-right px-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-lg font-semibold w-10 h-10 border border-white rounded-full"
        >
          ☰
        </button>
      </div>

      <nav
        className={`
          bg-black w-full p-2 flex justify-around
          fixed bottom-0
          md:flex-col
          md:absolute
          md:top-15
          md:right-0
          md:justify-start
          md:h-min
          md:items-start
          lg:flex lg:flex-row lg:static

          ${
            open
              ? "  md:z-50 md:w-48 md:flex  md:bg-black md:shadow-lg "
              : "md:hidden lg:flex"
          }
        `}
      >
        <div className="flex px-2 flex-col md:flex-row items-center justify-center">
          <div className="flex justify-center w-full">
            <FaHome
              size={iconSize}
              color={page === "home" ? colors.white : colors.disabled}
            />
          </div>
          <span
            className={`${
              page === "home" ? "text-white font-semibold" : "text-disabled"
            } text-xl text-center`}
          >
            <a href="/">Início</a>
          </span>
        </div>

        {/* TRANSAÇÕES */}
        <div className="flex px-2 flex-col  items-center justify-center md:flex-row">
          <div className="flex justify-center w-full">
            <GoArrowSwitch
              size={iconSize}
              color={page === "transacoes" ? colors.white : colors.disabled}
            />
          </div>
          <span
            className={`${
              page === "transacoes"
                ? "text-white font-semibold"
                : "text-disabled"
            } text-xl text-center`}
          >
            <a href="/transactions">Transações</a>
          </span>
        </div>

        <div className="flex px-2 flex-col md:flex-row items-center justify-center">
          <div className="flex justify-center w-full">
            <MdPerson
              size={iconSize}
              color={page === "perfil" ? colors.white : colors.disabled}
            />
          </div>
          <span
            className={`${
              page === "perfil" ? "text-white font-semibold" : "text-disabled"
            } text-xl text-center`}
          >
            <a href="/profile">Perfil</a>
          </span>
        </div>
      </nav>
    </div>
  );
}
