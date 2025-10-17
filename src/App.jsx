import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { provideData } from "./redux/slices/userData.slice";
import { fetchData } from "./api/apiData";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.patients);
  
  useEffect(() => {
    const takeData = async () => {
      const data = await fetchData();
      dispatch(provideData(data));
    };
    takeData();
  }, []);
 
  return (
    <div className="app w-[98%] m-auto p-2">
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default App;
