import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <Link className=" hover:text-blue-700 text-blue-400" to="/menu">
        &larr; Back to menu
      </Link>

      <p>Your cart is still empty. Start adding some pizzas 🍕🍕</p>
    </div>
  );
}

export default EmptyCart;
