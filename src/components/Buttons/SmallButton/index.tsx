import type { ReactNode } from "react";
import { colors } from "../../../styles/colors";
import { Link } from "react-router-dom";
export function SmallButton({
  route,
  icon,
  color,
  onClick,
}: {
  route?: string;
  icon: ReactNode;
  color: string;
  onClick?: () => void;
}) {
  return (
    route ? <Link to={route} className="block w-full">
    <button
      className="rounded-full bg-black border-1 border-white p-2.5"
      style={{ borderColor: color }}
      onClick={onClick}
    >
      {icon}
    </button>
  </Link> : 
      <button
        className="rounded-full w-fit block bg-black border-1 border-white p-2.5"
        style={{ borderColor: color }}
        onClick={onClick}
      >
        {icon}
      </button>
  );
}
