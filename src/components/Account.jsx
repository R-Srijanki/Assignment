import { useAuth } from "../utils/AuthContext";
export default function Account() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-sm">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h1>

      <div className="flex mb-6">
        <img
          src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <div className="flex flex-col mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>
        <h3 className="text-gray-500 text-sm">{user?.email}</h3>
        </div>
      </div>

      <p className="text-gray-600 text-sm max-w-md">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
      </p>
      </div>
    </div>
  );
}
