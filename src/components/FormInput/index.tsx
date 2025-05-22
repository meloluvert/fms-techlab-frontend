import type { IForm } from "../../interfaces";



export function FormInput({ name, label, placeholder, type, value, onChange, options, step }: IForm) {
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={name} className="text-white text-sm mb-1">{label}</label>

      {type === "select" && options ? (
        <select
          id={name}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full px-4 py-2 bg-zinc-800 rounded-full text-white outline-none"
        >
          <option value="">Selecione</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>{opt.name}</option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          step={step}
          min={type === "number" ? 0 : undefined}
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-zinc-800 rounded-full text-white outline-none placeholder:text-zinc-400"
          value={value}
          onChange={e => onChange && onChange(e.target.value)}
        />
      )}
    </div>
  );
}
