import { Outlet } from "react-router-dom";
import type { IAccount } from "./interfaces";
import { Header } from "./components/Header";
import { useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
export const contaX: IAccount = {
  id: "1",
  name: "Conta X",
  balance: "3076.12",
  type: "corrente",
  updated_at: "2025-05-22 10:30",
  created_at: "2025-01-10 14:00",
  description:
    "Conta principal usada para pagamentos mensais Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a laudantium praesentium nemo incidunt, ipsam hic animi dolorum, esse aut autem! Excepturi dolores, autem praesentium deleniti voluptas odit quo mollitia!",
  color: "#345AF1", // Azul padrão
};

function App() {
  const location = useLocation();
  let page: string = '';
  switch (location.pathname) {
    case "/":
      page = "home";
      break;
    case "/perfil":
      page = "perfil";
      break;
    case "/transferencias":
      page = "transacoes";
      break;

    default:
      break;
  }
  console.log(location.pathname)
  // Lista de rotas onde o Footer NÃO deve aparecer
  const hideFooterRoutes = ["/entrar", "/cadastro"];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header page={page} />
      <div className="flex items-center pt-3 pb-25 justify-center">
        <Outlet />
      </div>
      {shouldShowFooter && <Footer page={page} />}
    </>
  );
}

export default App;
