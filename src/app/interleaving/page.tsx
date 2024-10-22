import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";

const InterleavingPage = () => {
  return (
    <div>
      <h2>InterleavingPage</h2>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne />
    </div>
  );
};
export default InterleavingPage;
