import Header from "../firebase-basics/components/Header";
import BarChart from "./components/BarChart";
import RecentOrders from "./components/RecentOrders";
// import Sidebar from "./components/Sidebar";
import TopCards from "./components/TopCards";
// import Main from "./components/Main";

const Layout = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <TopCards />
      {/* <Sidebar/> */}
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
};

export default Layout;
