"use client";

import { useTheme } from "@/components/theme-provider";

const ClientRoutePage = () => {
  //   console.log("Client Side rendered");

  const theme = useTheme();

  return (
    <div>
      <h2
        style={{
          color: theme.color.secondary,
        }}
      >
        Client Route Page
      </h2>
    </div>
  );
};
export default ClientRoutePage;
