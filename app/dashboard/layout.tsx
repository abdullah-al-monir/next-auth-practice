const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-y-4">
    <nav className="bg-green-700 text-white">
      This is a nav component</nav>{children}</div>;
};

export default DashboardLayout;
