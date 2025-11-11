export const SystemSettings = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">System Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Transaction Fee (%)</label>
          <input
            type="number"
            className="border p-2 rounded-md w-full"
            defaultValue={2.5}
          />
        </div>
        <button className="bg-theme text-white px-6 py-2 rounded-md">
          Save Settings
        </button>
      </div>
    </div>
  );
};
