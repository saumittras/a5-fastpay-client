const AgentCommission = () => {
  const commissions = [
    { id: 1, date: "2025-10-28", amount: 50 },
    { id: 2, date: "2025-10-27", amount: 30 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Commission History</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">#</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Amount (৳)</th>
          </tr>
        </thead>
        <tbody>
          {commissions.map((c) => (
            <tr key={c.id}>
              <td className="p-2 border">{c.id}</td>
              <td className="p-2 border">{c.date}</td>
              <td className="p-2 border text-green-600 font-semibold">
                {c.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentCommission;
