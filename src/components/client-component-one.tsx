"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-component-two";

const ClientComponentOne = () => {
  const [name, setName] = useState("Udeme");
  return (
    <div>
      <h2>Client Component One</h2>
      <ClientComponentTwo />
    </div>
  );
};
export default ClientComponentOne;
