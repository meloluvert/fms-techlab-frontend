
interface ITransferTableProps {
  fromName: string;
  toName: string;
  fromBalance: number;
  toBalance: number;
  transferValue: number;
}

export function TransferTable({
  fromName,
  toName,
  fromBalance,
  toBalance,
  transferValue,
}: ITransferTableProps) {
  const futureFrom = fromBalance - transferValue;
  const futureTo = toBalance + transferValue;

  return (
    <table className="bg-[#181818] text-white border-separate border-spacing-0 w-full rounded-md overflow-hidden">
      <thead>
        <tr>
          <th className="border-r border-white px-4 py-2 text-left">Saldo</th>
          <th className="text-red-500 border-r border-white px-4 py-2 text-left">
            {fromName}
          </th>
          <th className="text-green-500 px-4 py-2 text-left">{toName}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-r border-white px-4 py-2 text-left">Atual</td>
          <td className="text-golden border-r border-white px-4 py-2 text-left">
            {fromBalance.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </td>
          <td className="text-golden px-4 py-2 text-left">
            {toBalance.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </td>
        </tr>
        <tr>
          <td className="border-r border-white px-4 py-2 text-left">Futuro</td>
          <td
            className={`border-r border-white px-4 py-2 text-left ${
              futureFrom < 0 ? "text-red-600" : "text-golden"
            }`}
          >
            {futureFrom.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </td>
          <td
            className={`px-4 py-2 text-left ${
              futureTo < 0 ? "text-red-600" : "text-golden"
            }`}
          >
            {futureTo.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
}