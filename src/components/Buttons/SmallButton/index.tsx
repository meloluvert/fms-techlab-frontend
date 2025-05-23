import type { ReactNode } from "react";
import { colors } from "../../../styles/colors";
export function SmallButton({
  route,
  icon,
  color,
}: {
  route?: string;
  icon: ReactNode;
  color: string;
}) {
  return (
    <button
      className="rounded-full bg-black border-1 border-white p-2"
      style={{ borderColor: color }}
    >
      {icon}
    </button>
  );
}
