export const FiltersBar = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <input
        type="date"
        className="border p-2 rounded-md"
        placeholder="Start Date"
      />
      <input
        type="date"
        className="border p-2 rounded-md"
        placeholder="End Date"
      />
      <select className="border p-2 rounded-md">
        <option>All Types</option>
        <option>Deposit</option>
        <option>Withdraw</option>
      </select>
      <button className="bg-theme text-white px-4 py-2 rounded-md">
        Apply Filters
      </button>
    </div>
  );
};
