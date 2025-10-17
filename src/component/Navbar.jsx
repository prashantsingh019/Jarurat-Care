import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendQuery } from "../redux/slices/query.slice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  function handleClick() {
    navigate(`/`);
  }
  return (
    <div className="nav flex sm:justify-between items-center lg:bg-white ">
      <h1 className="text-3xl">Jarurat Care 🩺</h1>
      <div>
        <input
          type="text"
          className="bg-gray-100 outline-none p-1 rounded"
          placeholder="Search here..."
          value={query}
          onChange={(e) => dispatch(sendQuery(e.target.value))}
        />
      </div>
      <ul className="lg:flex items-center gap-10 text-lg sm:hidden ">
        <li onClick={handleClick} className="hover:underline cursor-pointer">
          Home
        </li>
        <li>Patients</li>
        <li>About</li>
        <button className="bg-blue-400 px-2 py-0 rounded text-white cursor-pointer">Add+</button>
      </ul>
    </div>
  );
}

export default Navbar;
