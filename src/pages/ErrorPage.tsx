import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4 text-red-600">Oops!</h1>
      <p className="text-xl mb-2">
        Something went wrong or the page wasn’t found.
      </p>
      <p className="text-gray-500 mb-4">
        {error?.statusText || error?.message || "404 Not Found"}
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
