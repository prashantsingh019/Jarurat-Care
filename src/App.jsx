import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { provideData } from "./redux/slices/userData.slice";
import { fetchData } from "./api/apiData";
import Card from "./component/Card";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.patients);
  
  

   
  useEffect(()=>{
    const takeData = async()=>{
       const data = await fetchData();
       dispatch(provideData(data));
    } 
    takeData();
  },[])
  
 

  return (
    <div className="app w-[98%] m-auto p-2">
      <div className="nav flex justify-between items-center">
        <h1 className="text-3xl">Jarurat Care 🩺</h1>
        <ul className="flex items-center gap-10 text-xl">
          <li>Home</li>
          <li>Patients</li>
          <li>About</li>
        </ul>
      </div>
      <div className="app-body mt-5 flex gap-4 justify-center flex-wrap">
          {data.map((user)=>{
            return <Card user={user} key={user.id}/>;
          })}
      </div>
    </div>
  )
}

export default App;