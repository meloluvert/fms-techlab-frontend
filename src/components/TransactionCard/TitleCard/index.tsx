import type { ReactNode } from "react";

interface ITitleCardProps {
  icon: ReactNode;
  title_card: string;
  amount: number;
  bgColor: string;
}

export function TitleCard({ icon, title_card, amount, bgColor }: ITitleCardProps) {
  return (
    <div className="flex flex-row items-center justify-between rounded-xl px-4 py-2" style={{ backgroundColor: bgColor }}>
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-semibold">{title_card}</span>
      </div>
      {title_card !== "Saldo Inicial" && <span>R$ {amount}</span>}
    </div>
  );
}
