import type { IForm } from "../../interfaces";
export function FormInput({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  options,
  step,
  required,
  readonly,
}: IForm) {
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={name} className="text-white text-sm font-bold mb-1">
        {label}
      </label>

      {type === "select" && options ? (
        <select
          id={name}
          name={name}                  
          value={value}                
          onChange={onChange}
          disabled={options.length === 1}
          className="w-full px-4 py-2 bg-zinc-800 rounded-full text-white outline-none"
          required={required}
        >
          <option value="" disabled>
            {placeholder || "Selecione..."}
          </option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          step={step}
          min={type === "number" ? 0 : undefined}
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-zinc-800 rounded-full text-white outline-none placeholder:text-zinc-400"
          value={value}
          onChange={onChange}
          required={required}
          readOnly={readonly}
        />
      )}
    </div>
  );
}
