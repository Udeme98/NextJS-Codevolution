import Link from "next/link";

const F4 = () => {
  return (
    <div>
      <h2>F4 Page</h2>
      <div>
        <Link href="/f1/f3">F3 Page</Link>
        <Link href="/about">About Page</Link>
      </div>
    </div>
  );
};
export default F4;
