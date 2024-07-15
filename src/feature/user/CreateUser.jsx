import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form className="text-center" onSubmit={(e) => handleSubmit(e)}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        className=" placeholder:snap-center focus:bg-white bg-slate-300 rounded-full w-max h-10 focus:ring focus:ring-slate-200  px-6 py-4 text-md text-stone-600  focus:outline-none mb-4 mt-2"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button className="bg-yellow-400 rounded-full px-3 py-1 hover:bg-yellow-200 transition-all duration-300 uppercase text-sm">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
