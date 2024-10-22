import fs from "fs";
import ServerComponentTwo from "./server-component-two";

const ServerComponentOne = () => {
  fs.readFileSync("src/component/server-component-one.tsx", "utf-8");
  return (
    <div>
      <h2>Server Component One</h2>
      <ServerComponentTwo />
    </div>
  );
};
export default ServerComponentOne;
