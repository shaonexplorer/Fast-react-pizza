// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser";
import { Link } from "react-router-dom";

function Home() {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="space-y-7 m-10 flex items-center justify-start flex-col">
      <h1 className="text-xl text-stone-700 font-bold text-center">
        The best pizza.
        <br />
        <span className="text-yellow-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {/* <Link to="/menu">menu</Link> */}
      {username === "" ? (
        <CreateUser />
      ) : (
        <Link
          className="bg-yellow-400 rounded-full px-3 py-2 uppercase"
          to="/menu"
        >
          continue order, {username}
        </Link>
      )}
    </div>
  );
}

export default Home;
