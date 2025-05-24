import type { INav } from "../Footer";
import { Nav } from "../Nav";
export function Header({ page }: INav) {
  return (
    <header className="flex flex-row bg-black text-golden  px-5 py-3 static">
      <div className="w-full flex flex-row justify-between md:justify-start">
        <div className="w-1/3 md:w-fit px-2 text-4xl"> <a href="/"> FMS </a></div>
        <div className="border-l-golden border-l-4 w-2/3 md:w-fit md:px-3 flex items-center justify-around">
          <span className="text-right inline-block h-5 px-0.2">
            <a href="/">
            Financial Management System
            </a>
          </span>
        </div>
      </div>
      <div className="hidden md:block ">
        <Nav page={page} />
      </div>
    </header>
  );
}
