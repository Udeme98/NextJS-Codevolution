"use client";

import { useEffect } from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-red-500">
        <h3>Error fetching user data...</h3>
      </div>
    </div>
  );
};
export default ErrorPage;
