import { useState } from "react";

const AgentProfile = () => {
  const [name, setName] = useState("Saumittra Sarker");
  const [phone, setPhone] = useState("01720323034");
  const [password, setPassword] = useState("");

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: API call
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">New Password</label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default AgentProfile;
