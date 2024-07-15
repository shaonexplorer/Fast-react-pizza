import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./feature/home/Home";
import Menu, { loader as menuLoader } from "./feature/menu/Menu";
import Cart from "./feature/cart/Cart";
import CartOverview from "./feature/cart/CartOverview";
import AppLayout from "./ui/AppLayout";
import CreateOrder, {
  action as createOrderAction,
} from "./feature/order/CreateOrder";
import Order, { loader as orderLoader } from "./feature/order/Order";
import { Toaster } from "react-hot-toast";
import EmptyCart from "./feature/cart/EmptyCart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, loader: menuLoader },
      { path: "/cart", element: <Cart /> },
      { path: "/cartOverview", element: <CartOverview /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      { path: "/order/:orderId", element: <Order />, loader: orderLoader },
      { path: "/emptycart", element: <EmptyCart /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
