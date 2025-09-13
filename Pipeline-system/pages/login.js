import { useContext, useState } from "react";
import { UserContext } from "./_app";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [role, setRole] = useState("admin");

  const handleLogin = () => {
    if (!name) return;
    setUser({ id: Date.now(), name, role });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow w-80 space-y-4">
        <h1 className="text-xl font-bold">Login</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="admin">Admin</option>
          <option value="advisor">Advisor</option>
          <option value="phoner">Phoner</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-xl"
        >
          Login
        </button>
      </div>
    </div>
  );
}