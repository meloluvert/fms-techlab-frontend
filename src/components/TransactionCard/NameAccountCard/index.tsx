import { FaArrowRightLong } from "react-icons/fa6";
import { colors } from "../../../styles/colors";

export interface IAccountCard {
  type: string;
  sourceAccount?: {
    name: string;
    balance: number;
  };
  destinationAccount?: {
    name: string;
    balance: number;
  };
}

export function NameAccountCard({ type, sourceAccount, destinationAccount }: IAccountCard) {
  if (type === "initial_balance") {
    return (
      <div className="mt-2 text-base text-white">
        {destinationAccount?.name}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-around gap-2 mt-2 text-center text-base">
      <div
      className="w-2/5"
        style={{
          color: type === "transfer" ? colors.lightRed : colors.white,
        }}
      >
        {sourceAccount?.name}
      </div>
      <FaArrowRightLong className="w-1/5" />
      <div
      className="w-2/5"
        style={{
          color: type === "transfer" ? colors.buttonGreen : colors.white,
        }}
      >
        {destinationAccount?.name}
      </div>
    </div>
  );
}
