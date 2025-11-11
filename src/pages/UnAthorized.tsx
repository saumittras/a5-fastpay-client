// src/pages/Unauthorized.tsx
import { useNavigate } from "react-router";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const goHome = () => {
    navigate("/"); // Go to home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">403</h1>
      <h2 className="text-2xl font-semibold mb-4">Unauthorized Access</h2>
      <p className="text-gray-700 mb-6 text-center">
        You do not have permission to view this page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={goBack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Go Back
        </button>
        <button
          onClick={goHome}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
