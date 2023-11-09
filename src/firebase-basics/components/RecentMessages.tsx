import { useEffect, useState } from "react";
import { DocumentData, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Props } from "../../pages/Contact";
import { FiMessageCircle } from "react-icons/fi";

const RecentOrders = () => {
  const [orders, setOrder] = useState<Props[]>([]);
  const colRef = collection(db, "messaging");
  useEffect(() => {
    const controller = new AbortController();
    const cachedOrder: Props[] = [];
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc: DocumentData) => {
        cachedOrder.push({ ...doc.data() });
        setOrder(cachedOrder);
        console.log(doc.data());
      });
    });
    return () => controller.abort();
  }, []);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const unsubscribe = onSnapshot(colRef, (snapshot) => {
  //     if (controller.signal.aborted) return;

  //     snapshot.docs.forEach((doc: DocumentData) => {
  //       order.push({ ...doc.data() });
  //       setOrder(order);
  //       console.log(doc.data());
  //     });
  //   });

  //   return () => {
  //     controller.abort();
  //     unsubscribe(); // Unsubscribe from the snapshot listener
  //   };
  // }, []);

 return (
   <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
     <h1> Orders</h1>
     <ul>
       {orders.map((order, index) => (
         <li
           key={index}
           className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
         >
           <div className="bg-purple-100 rounded-lg p-3 ">
             <FiMessageCircle className="text-purple-800" />
           </div>
           <div className="pl-4">
             <p className="text-xs text-gray-800 font-bold">{order.email}</p>
             <p className="text-gray-400 text-sm">{order.message}</p>
           </div>
           {/* <p className="lg:flex md:hidden absolute right-6 text-sm">
             {order.message}
           </p> */}
         </li>
       ))}
     </ul>
   </div>
 );
};

export default RecentOrders;
