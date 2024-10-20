"use client";

import { serverSideFunction } from "@/utils/server-utils";

const ClientRoutePage = () => {
  console.log("Client Side rendered");
  const result = serverSideFunction();
  return (
    <div>
      <h2>Client Route Page</h2>
      {result}
    </div>
  );
};
export default ClientRoutePage;
