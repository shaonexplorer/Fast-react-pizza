import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../helper/helpers";
import { PropTypes } from "prop-types";
import { decreaseItem, deleteItem, increaseItem } from "./cartSlice";

function CartItem({ item }) {
  // const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const currentItem = useSelector((state) =>
    state.cart.cart.find((x) => item.pizzaId === x.pizzaId)
  );

  const currentQty = currentItem.quantity;

  function handleDecrease() {
    dispatch(decreaseItem(item.pizzaId));
  }

  function handleIncrease() {
    dispatch(increaseItem(item.pizzaId));
  }

  function handleDeleteItem() {
    dispatch(deleteItem(item.pizzaId));
  }

  return (
    <li className="flex items-center">
      <p className="w-40">
        {item.quantity}&times; {item.name}
      </p>
      <div className="flex ml-auto gap-5 items-center">
        <p>{formatCurrency(item.totalPrice)}</p>

        <div className="ml-auto mr-4 flex gap-3 items-center">
          <button
            onClick={handleDecrease}
            className="   bg-yellow-500 hover:bg-yellow-400 rounded-full px-3 py-1 uppercase font-extrabold"
          >
            -
          </button>
          {currentQty}
          <button
            onClick={handleIncrease}
            className="   bg-yellow-500 hover:bg-yellow-400 rounded-full px-2.5 py-1 uppercase font-extrabold"
          >
            +
          </button>
        </div>

        <button
          onClick={handleDeleteItem}
          className="ml-auto bg-yellow-500 hover:bg-yellow-400 rounded-full px-3 py-1 uppercase text-sm mt-1"
        >
          delete
        </button>
      </div>
    </li>
  );
}

CartItem.propTypes = { item: PropTypes.object };

export default CartItem;
