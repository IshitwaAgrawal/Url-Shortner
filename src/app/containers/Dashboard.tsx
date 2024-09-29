// components/Dashboard.tsx
import { FC } from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard: FC = () => {
  const { logout } = useAuth();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
      <button
        onClick={logout}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
