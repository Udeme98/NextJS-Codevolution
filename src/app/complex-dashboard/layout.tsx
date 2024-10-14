// import UserAnalytics from "@/component/UserAnalytics";
// import RevenueMetrics from "@/component/RevenueMetrics";
// import Notifications from "@/component/Notifications";

const DashboardLayuot = ({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
export default DashboardLayuot;
