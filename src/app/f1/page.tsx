import Link from "next/link";

const f1 = () => {
  return (
    <div>
      <h2>f1 page</h2>
      <Link href="/f1/f2">f2</Link>
    </div>
  );
};
export default f1;
