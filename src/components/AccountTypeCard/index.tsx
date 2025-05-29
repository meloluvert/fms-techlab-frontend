import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { SmallButton } from "../../components/Buttons/SmallButton";
import { colors } from "../../styles/colors";

interface AccountTypeCardProps {
  accountType: {
    id: string;
    name: string;
    user?: any[];
  };
  onDelete: (id: string) => void;
}

export function AccountTypeCard({ accountType, onDelete }: AccountTypeCardProps) {
  const handleDelete = () => {
    if (window.confirm(`Deseja realmente excluir o tipo "${accountType.name}"?`)) {
      onDelete(accountType.id);
    }
  };

  // se o tipo da conta não for universal (para todos os usuários) é possível editar
  const isEditable = accountType.user && accountType.user.length > 0;

  return (
    <div className="bg-black rounded-xl p-4 flex flex-col justify-between shadow-md border border-gray-700">
      <h3 className="text-white text-xl font-semibold mb-3">{accountType.name}</h3>
      {isEditable && (
        <div className="w-full flex flex-row items-center justify-end gap-1">
          <SmallButton
            color={colors.buttonRed}
            icon={<FaTrash color={colors.white} size={20} />}
            onClick={handleDelete}
          />
          <SmallButton
            color={colors.buttonBlue}
            icon={<MdEdit color={colors.white} size={20} />}
            route={`/account-types/edit/${accountType.id}`}
          />
        </div>
      )}
    </div>
  );
}
