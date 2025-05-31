import { FaArrowRightLong } from "react-icons/fa6";
import { colors } from "../../../styles/colors";
import type { IAccount } from "../../../interfaces";

export interface IAccountCard {
  type?: string;
  originAccount?: IAccount | null;
  destinationAccount?: IAccount | null;
}

export function NameAccountCard({ type, originAccount, destinationAccount }: IAccountCard) {
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
      className="w-2/5 text-bold"
        style={{
          color: type === "transfer" ? colors.lightRed : colors.white,
        }}
      >
        {originAccount?.name || "?"}
      </div>
      <FaArrowRightLong className="w-1/5 text-bold" />
      <div
      className="w-2/5"
        style={{
          color: type === "transfer" ? colors.buttonGreen : colors.white,
        }}
      >
        {destinationAccount?.name || "?"}
      </div>
    </div>
  );
}
