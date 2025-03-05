function GlobalNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-600">
          Page Not Found
        </h2>
        <p className="mb-8 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="rounded-lg bg-red-500 px-6 py-3 text-white transition-colors hover:bg-red-700"
        >
          Go Back Home
        </a>
      </div>
    </main>
  );
}

export default GlobalNotFound;
