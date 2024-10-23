import { serverSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
  console.log("Server route rendered");
  const result = serverSideFunction();
  return (
    <div>
      <h2>Server Route Page</h2>
      <p>{result}</p>
    </div>
  );
};
export default ServerRoutePage;
