import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../helper/helpers";
import PropTypes from "prop-types";
import {
  addItem,
  decreaseItem,
  deleteItem,
  increaseItem,
} from "../cart/cartSlice";
import toast from "react-hot-toast";

function MenuItem({ pizza }) {
  // const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const cart = useSelector((state) => state.cart.cart);

  const inCart = cart.find((item) => item.pizzaId === pizza.id);

  const dispatch = useDispatch();

  function handleDecrease() {
    dispatch(decreaseItem(pizza.id));
  }

  function handleIncrease() {
    dispatch(increaseItem(pizza.id));
  }

  function handleDelete() {
    dispatch(deleteItem(pizza.id));
    toast.success("item succesfully deleted");
  }

  function handleAddItem() {
    const newItem = {
      pizzaId: pizza.id,
      name: pizza.name,
      quantity: 1,
      unitPrice: pizza.unitPrice,
      totalPrice: pizza.unitPrice * 1,
    };

    dispatch(addItem(newItem));
    toast.success("item succesfully added");
  }
  return (
    <li className="flex pt-5 text-stone-500">
      <img
        className={`h-32   ${pizza.soldOut ? "grayscale opacity-70" : ""}`}
        src={pizza.imageUrl}
        alt={pizza.name}
      />
      <div className="ml-4 grid grid-flow-row grow">
        <p className="font-bold">{pizza.name}</p>
        <p className="capitalize italic">{pizza.ingredients.join(", ")}</p>
        <div className="mt-auto flex flex-row justify-between mb-3">
          {!pizza.soldOut ? (
            <p className="text-m">{formatCurrency(pizza.unitPrice)}</p>
          ) : (
            <p className="text-m">Sold out</p>
          )}
          <div className="flex gap-3 items-center">
            {!pizza.soldOut && inCart && (
              <div className="flex gap-2 items-center">
                <button
                  onClick={handleDecrease}
                  className="   bg-yellow-500 hover:bg-yellow-400 rounded-full px-3 py-1 uppercase font-extrabold"
                >
                  -
                </button>
                {inCart && <span>{inCart.quantity}</span>}
                <button
                  onClick={handleIncrease}
                  className="   bg-yellow-500 hover:bg-yellow-400 rounded-full px-2.5 py-1 uppercase font-extrabold"
                >
                  +
                </button>
              </div>
            )}
            {inCart && (
              <button
                className=" text-white bg-red-500 hover:bg-red-400 rounded-full px-5 py-1 uppercase text-sm transition-all duration-300"
                onClick={handleDelete}
              >
                delete
              </button>
            )}
            {!pizza.soldOut && !inCart && (
              <button
                onClick={handleAddItem}
                className="bg-yellow-400 rounded-full px-3 py-1 hover:bg-yellow-200 transition-all duration-300 uppercase text-sm"
              >
                add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = { pizza: PropTypes.array };

export default MenuItem;
