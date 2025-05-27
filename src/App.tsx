import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  const location = useLocation();
  let page: string = '';
  switch (location.pathname) {
    case "/":
      page = "home";
      break;
    case "/profile":
      page = "perfil";
      break;
    case "/transactions":
      page = "transacoes";
      break;

    default:
      break;
  }
  // Lista de rotas onde o Footer NÃO deve aparecer
  const hideFooterRoutes = ["/login", "/registrer"];
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
