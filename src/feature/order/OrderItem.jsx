import { formatCurrency } from "../../helper/helpers";

import PropTypes from "prop-types";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="flex justify-between items-center">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = { item: PropTypes.object };

export default OrderItem;
