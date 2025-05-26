import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import { axiosPrivate } from "../services/api";
import type { IUser } from "../interfaces";

interface AuthContextType {
  user: IUser | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Função de login
  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await axiosPrivate.post("/user/login", { email, password });
      console.log(response)
      const { token: receivedToken, user: receivedUser } = response.data;
      setUser(receivedUser);
      setToken(receivedToken);
      localStorage.setItem("token", receivedToken);
      alert("tudo certo")
      return true;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };
  
  // Carrega usuário se houver token salvo no localStorage
  useEffect(() => {
    setLoading(true);
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      axiosPrivate.get("/user/perfil", {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
        .then((res) => {
          setUser(res.data);
          setToken(storedToken);
        })
        .catch((err) => {
          logout();
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);
  
  
  
  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );

  
};
