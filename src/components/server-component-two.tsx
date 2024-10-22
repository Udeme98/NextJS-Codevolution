import fs from "fs";

const ServerComponentTwo = () => {
  fs.readFileSync("src/component/server-component-two.tsx", "utf-8");
  return (
    <div>
      <h2>Server Component One</h2>
    </div>
  );
};
export default ServerComponentTwo;
