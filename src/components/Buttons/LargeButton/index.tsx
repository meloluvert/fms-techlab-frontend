import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface ILargeButton {
  color: string;
  text: string;
  route?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export function LargeButton({
  color,
  text,
  route,
  icon,
  onClick,
  type,
}: ILargeButton) {
  //route não pode ser null caso usemos links
  if (route) {
    return (
      route && (
        <Link to={route} className="block w-full">
          <button
            type={type ? type : "button"}
            onClick={onClick}
            style={{ backgroundColor: color }}
            className={`font-semibold rounded-3xl p-2 px-4 w-full text-white focus:outline-offset-2 flex items-center justify-center gap-2`}
          >
            {text}
            {icon && <span>{icon}</span>}
          </button>
        </Link>
      )
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={`font-semibold rounded-3xl p-2 px-4 w-full text-white focus:outline-offset-2 flex items-center justify-center gap-2`}
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}
