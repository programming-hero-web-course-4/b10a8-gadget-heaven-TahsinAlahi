import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404 : Page Not Found</h1>
      <p className="text-lg font-medium">
        The page you are looking for is not found
      </p>
      <Link
        className="px-6 py-2 bg-purple-700 text-white text-lg font-semibold rounded-2xl hover:bg-purple-800"
        role="button"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
