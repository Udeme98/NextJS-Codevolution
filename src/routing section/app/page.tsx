import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home Page!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <Link href="/order-product">Order Products</Link>
    </>
  );
};
export default Home;