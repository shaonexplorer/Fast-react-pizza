import { FiUserCheck } from "react-icons/fi";
import { GiFullPizza } from "react-icons/gi";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const username = useSelector((state) => state.user.userName);
  return (
    <header className=" px-36 py-6 grid grid-flow-col grid-cols-[auto_1fr_auto] items-center justify-between bg-yellow-400">
      <div className="flex gap-1 items-center">
        <span className="text-5xl">
          <GiFullPizza />
        </span>

        <Link
          className=" hover:text-stone-700 transition-all duration-200 tracking-widest uppercase text-3xl pl-5"
          to="/"
        >
          fast react pizza co.
        </Link>
      </div>

      <div className="flex items-center justify-center gap-1 px-11">
        <IoSearchCircleSharp className="text-5xl" />
        <input
          className=" placeholder:text-yellow-400 rounded-full w-full h-10 focus:ring focus:ring-yellow-400  px-6 py-4 text-md text-yellow-500 bg-stone-500 focus:outline-none"
          type="text"
          placeholder="search order"
        ></input>
      </div>

      <div className="flex gap-3 items-center">
        <span className="text-3xl">{username && <FiUserCheck />}</span>
        <p className="uppercase font-bold">{username}</p>
      </div>
    </header>
  );
}

export default Header;
