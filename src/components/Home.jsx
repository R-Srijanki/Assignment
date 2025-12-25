import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-end justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm pb-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to PopX
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <Link to="/register">
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium mb-3">
            Create Account
          </button>
        </Link>

        <Link to="/login">
          <button className="w-full bg-purple-100 text-purple-700 py-3 rounded-lg font-medium">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
}
