import { FaCheck, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export function Profile() {
  return (
    <div className="max-w-sm mx-auto p-6 bg-zinc-900 rounded-2xl text-white space-y-4 shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center">Perfil</h2>

      <div className="flex justify-center relative">
        <img
          src="https://i.pravatar.cc/100?img=5"
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover border-2 border-white"
        />
        <button className="absolute bottom-2 right-[36%] bg-black p-1 rounded-full">
          <MdEdit className="text-white text-sm" />
        </button>
      </div>

      <div className="space-y-2">
        <div>
          <label className="block text-sm text-zinc-400">Nome</label>
          <input
            type="text"
            defaultValue="nome de teste aqui"
            className="w-full px-4 py-2 bg-zinc-800 rounded-full text-white placeholder:text-zinc-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-zinc-400">Email</label>
          <input
            type="email"
            defaultValue="emailteste@gmail.com"
            className="w-full px-4 py-2 bg-zinc-800 rounded-full text-white placeholder:text-zinc-400 outline-none"
          />
        </div>

        <div className="relative">
          <label className="block text-sm text-zinc-400">Senha</label>
          <input
            type="password"
            defaultValue="************"
            className="w-full px-4 py-2 bg-zinc-800 rounded-full text-white placeholder:text-zinc-400 outline-none"
          />
          <button className="absolute right-3 top-8 text-white">
            <MdEdit />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full">
          Salvar Alterações
          <FaCheck />
        </button>
        <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-full">
          Excluir Conta
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
