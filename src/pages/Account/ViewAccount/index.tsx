import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { LargeButton } from "../../../components/Buttons/LargeButton";
import { colors } from "../../../styles/colors";
import { TransactionsCard } from "../../../components/TransactionCard";
import { SmallButton } from "../../../components/Buttons/SmallButton";
import { FaFilter } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { axiosPrivate } from "../../../services/api";
import type { IAccount, ITransaction } from "../../../interfaces";
import { Loading } from "../../../components/Loading";
import { useNavigate } from "react-router-dom";
export function ViewAccount() {
  const { id } = useParams<{ id: string }>();
  const [account, setAccount] = useState<IAccount | null>(null);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  let navigate = useNavigate();
  const handleDelete = async () => {
    if(Number(account.balance) > 0){
      alert("Você precisa zerar a conta primeiro");
      return;
    }
    const confirmed = window.confirm("Tem certeza que deseja excluir esta conta?");
    if (!confirmed) return;
   
    try {
      await axiosPrivate.delete(`/accounts/${account.id}`);
      alert("Conta excluída com sucesso!");
      navigate("/")
    } catch (error) {
      alert("Erro ao excluir conta. Tente novamente.");
      console.error(error);
    }
  };
    useEffect(() => {
      if (!id) {
        setError("ID da conta não fornecido");
        setLoading(false);
        return;
      }
      setLoading(true);
      axiosPrivate
        .get(`/accounts/${id}`)
        .then((res) => {
          setAccount(res.data);
          setTransactions(res.data.transactions || []);
        })
        .catch((err) => {
          setError("Erro ao buscar dados da conta");
          console.error(err);
        })
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <div className="text-red-500">{error}</div>;
    if (!account) return <div>Conta não encontrada</div>;

    // Mapeia as transações para definir o tipo (received/sent)
    const mappedTransactions = transactions.map((t) => {
      let type: "received" | "sent" | "initial_balance" = "initial_balance";
      if (t.destinationAccount?.id === account.id && t.originAccount) {
        type = "received";
      } else if (t.originAccount?.id === account.id) {
        type = "sent";
      }

      return {
        ...t,
        type,
        sourceAccount: t.originAccount ?? undefined,
        destinationAccount: t.destinationAccount,
        date: t.created_at,
      };
    });

    return (
      <div
        className="border-t-10 md:border-t-0 -mt-3 w-full p-2 max-w-7xl"
        style={{ borderTopColor: account.color }}
      >
        <div>
          <div
            className="w-full flex justify-between md:border-b-5 md:mb-3"
            style={{ borderBottomColor: account.color }}
          >
            <span className="text-white text-3xl sm:text-5xl w-1/2 p-2">
              {account.name}
            </span>
            <div className="w-1/2 flex flex-row items-center justify-end gap-1">
              <div>
                <SmallButton
                  color={colors.buttonRed}
                  icon={<FaTrash color={colors.white} size={20} />}
                  onClick={handleDelete}
                />
              </div>
              <div>
                <SmallButton
                  color={colors.buttonBlue}
                  icon={<MdEdit color={colors.white} size={20} />}
                  route={`/account/edit/${account.id}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-disabled text-xs flex justify-around">
          <div className="text-base flex gap-2 flex-col sm:flex-row w-1/2">
            <span>Atualizado em </span>
            <span>{String(account.updated_at)}</span>
          </div>
          <div className="text-base flex gap-2 flex-col sm:flex-row w-1/2">
            <span>Criado em </span>
            <span>{String(account.created_at)}</span>
          </div>
        </div>
        <p className="text-white text-justify">{account.description}</p>
        <div className="flex flex-col sm:flex-row sm:justify-evenly md:justify-around justify-center items-center">
          <div className="md:w-1/3 justify-self-end">
            <p className="text-left md:inline-block md:w-full py-2 text-3xl text-golden">
              R$ {account.balance}
            </p>
          </div>
          <div className="w-full md:w-1/3 px-3 flex justify-center items-center max-w-sm">
            <LargeButton
              color={colors.buttonGreen}
              text="Transferir"
              route={`/transfer/${account.id}`}
              icon={<GoArrowSwitch size={20} color={colors.white} />}
            />
          </div>
        </div>
        <div className="flex flex-row text-white p-2 w-full justify-between items-center">
          <span>Histórico de Transações</span>
          <SmallButton
            color={colors.white}
            icon={<FaFilter color={colors.white} size={15} />}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mappedTransactions.map((t) => (
            <TransactionsCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    );
  };

