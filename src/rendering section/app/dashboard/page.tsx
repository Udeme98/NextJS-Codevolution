"use client";

import { useState } from "react";

const DashboardPage = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h3>Dashboard Page</h3>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
};
export default DashboardPage;
