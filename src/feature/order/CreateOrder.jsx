// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );

import { useSelector } from "react-redux";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../apiRestaurant";
import { clearCart } from "../cart/cartSlice";
import store from "../../store";
import { useState } from "react";
import toast from "react-hot-toast";

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

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  // const cart = fakeCart;
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="flex flex-col flex-grow items-center justify-start">
      <h2 className="mb-4">Ready to order? Lets go!</h2>

      <Form method="POST">
        <div className="flex flex-col">
          <label>First Name</label>
          <input
            className=" focus:bg-white bg-slate-300 rounded-full w-full  h-8 focus:ring focus:ring-slate-200  px-6 py-4 text-md text-stone-600  focus:outline-none mb-4 mt-2 "
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="flex flex-col">
          <label>Phone number</label>
          <div>
            <input
              className=" focus:bg-white bg-slate-300 rounded-full w-full h-8 focus:ring focus:ring-slate-200  px-6 py-4 text-md text-stone-600  focus:outline-none mb-4 mt-2 "
              type="tel"
              name="phone"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label>Address</label>
          <div>
            <input
              className=" focus:bg-white bg-slate-300 rounded-full w-full h-8 focus:ring focus:ring-slate-200  px-6 py-4 text-md text-stone-600  focus:outline-none mb-4 mt-2 "
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="flex items-center justify-center mt-5">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className=" bg-yellow-400 rounded-full px-3 py-1 hover:bg-yellow-200 transition-all duration-300 uppercase text-sm ">
            Order now
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const orderData = { ...data, cart: JSON.parse(data.cart) };

  const newOrder = await createOrder(orderData);

  store.dispatch(clearCart());

  console.log(newOrder);

  toast.success("order succesfully created");

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
