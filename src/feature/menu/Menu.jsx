import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-300 w-screen m-9 mx-36">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export function loader() {
  const menu = getMenu();
  return menu;
}

export default Menu;
