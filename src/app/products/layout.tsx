const Layout = async ({ children }: { children: React.ReactNode }) => {
  const res = await fetch("http://localhost:3002/products");
  const prod = await res.json();
  console.log({ prod });
  return <div>{children}</div>;
};
export default Layout;
