"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-component-two";

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Udeme");
  return (
    <div>
      <h2>Client Component One</h2>
      {children}
    </div>
  );
};
export default ClientComponentOne;
