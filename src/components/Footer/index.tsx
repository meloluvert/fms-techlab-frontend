import { Nav } from "../Nav";
export interface INav {
  page: string;
}

export function Footer({ page }: INav) {
  return (
    <footer className="w-full p-2 w-1-4 bg-black flex fixed bottom-0 justify-around">
      <Nav page={page}/>
    </footer>
  );
}
