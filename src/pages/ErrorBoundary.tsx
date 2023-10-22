import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();
  let errorMessage: string;
  let status: number | null = null;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
    status = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center gap-8"
    >
      <h1 className="text-4xl font-bold">Error {status ? status : null}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>{errorMessage}</i>
      </p>
      <Link
        className="font-medium text-indigo-500 underline hover:no-underline"
        to=""
      >
        Back to home
      </Link>
    </div>
  );
};

export default ErrorBoundary;
