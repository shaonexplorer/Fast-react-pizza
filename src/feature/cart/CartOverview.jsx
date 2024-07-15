import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../helper/helpers";
import { FaCartShopping } from "react-icons/fa6";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);

  const qty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="flex grow mx-36 py-7 items-center justify-between uppercase font-bold tracking-widest">
      <p>
        <span className="mr-3">{qty} Pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <div className="flex gap-2 items-center">
        <FaCartShopping />
        <Link className="uppercase  " to="/cart">
          Open cart &rarr;
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
