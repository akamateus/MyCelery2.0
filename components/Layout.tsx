import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-stone-900">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <FollowBar />
          <div className=" col-span-3 lg:col-span-2  border-neutral-800">
            {children}
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
