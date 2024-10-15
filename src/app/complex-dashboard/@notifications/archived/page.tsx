import Card from "@/components/Card";
import Link from "next/link";

const Archived = () => {
  return (
    <Card>
      <div>Archived</div>
      <Link href="/complex-dashboard/notifications">Notifications</Link>
    </Card>
  );
};
export default Archived;
