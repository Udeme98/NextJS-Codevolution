"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

const ClientRoutePage = () => {
  //   console.log("Client Side rendered");

  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <div>
      <h2
        style={{
          color: theme.color.secondary,
        }}
      >
        Client Route Page {result}
      </h2>
    </div>
  );
};
export default ClientRoutePage;
