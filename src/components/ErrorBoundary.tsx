import { Link, useRouteError } from "react-router-dom";

type ErrorBoundaryProps = {
  message: string;
  stack: string;
  type: string;
};

const ErrorBoundary = () => {
  const { message } = useRouteError() as ErrorBoundaryProps;

  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-900'>
      <div className='flex flex-col gap-2 rounded-md bg-zinc-700 p-8 shadow-md'>
        <h1 className='mb-4 text-3xl font-bold text-red-600'>
          Something went wrong
        </h1>
        <h3 className='font-semibold text-gray-400'>Error: {message}</h3>

        <p className='text-gray-400'>
          We apologize for the inconvenience. Please try again later or go back
          to the{" "}
          <Link to='/' className='text-blue-500 underline'>
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorBoundary;
