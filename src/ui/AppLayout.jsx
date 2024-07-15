import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../feature/cart/CartOverview";
import { useSelector } from "react-redux";

function AppLayout() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className=" grid grid-rows-[auto_1fr_auto] h-screen text-stone-500  ">
      <Header />
      {/* <header className="flex justify-center h-full">
          <Link className="uppercase space-x-3" to="/">
            fast react pizza co.
          </Link>

          <input
            className="rounded-full w-max h-10 focus:ring focus:ring-yellow-400  px-4 py-2 text-md text-stone-600 bg-yellow-300 focus:outline-none"
            type="text"
          ></input>
          <span>user</span>
        </header> */}

      <main className="bg-slate-200 flex items-top justify-center py-6 overflow-scroll font-semibold">
        <Outlet />
      </main>
      <div className="bg-slate-800">
        {/* <Link to="/cartOverview">cart</Link> */}
        {cart.length > 0 && <CartOverview />}
      </div>
    </div>
  );
}

export default AppLayout;
