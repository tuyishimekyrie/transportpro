import Header from "../firebase-basics/components/Header";
import BarChart from "./components/BarChart";
import RecentMessages from "./components/RecentMessages";
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
      <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4">
        <BarChart />
        <RecentMessages />
        <RecentOrders />
      </div>
    </main>
  );
};

export default Layout;
