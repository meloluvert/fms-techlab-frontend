import { Nav } from "../Nav";
export interface INav {
  page: string;
}

export function Footer({ page }: INav) {
  return (
    <footer className="w-full p-2 w-1-4 bg-black flex fixed bottom-0 justify-around">
       <div className="md:hidden w-screen fixed bottom-0">
      <Nav page={page}/>
       </div>
       <div className="hidden   text-center text-white md:block">
    Desenvolvido por <a href="https://github.com/meloluvert/">Lucas Melo</a>
       </div>
    </footer>
  );
}
