import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  const username = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="w-screen mx-5 sm:px-28">
      <Link className="px-5 hover:text-blue-700 text-blue-400" to="/menu">
        &larr; Back to menu
      </Link>

      <h2 className="mb-5 mt-5 px-5">
        Your cart, <span className="font-bold uppercase">{username}</span>
      </h2>

      <ul className=" mb-3 px-5 py-5 divide-y divide-slate-400 space-y-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="flex items-center justify-center">
        <Link
          className="mr-3 bg-yellow-400 rounded-full px-3 py-1 hover:bg-yellow-200 transition-all duration-300 uppercase text-sm "
          to="/order/new"
        >
          Order pizzas
        </Link>

        <button
          onClick={handleClearCart}
          className=" text-stone-600 bg-slate-400 rounded-full px-3 py-1 hover:bg-slate-200 transition-all duration-300 uppercase text-sm "
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
