import { useSelector } from "react-redux";
import Card from "./Card";
function Gallery() {
    const data = useSelector((state) => state.patients);
    const query = useSelector((state) => state.query.query);
    const filteredUser = data.filter((user)=>  user.firstName.toLowerCase().includes(query.toLowerCase()));

    console.log(filteredUser);
    
    return <div className="app-body mt-5 flex gap-4 justify-center flex-wrap">
      {filteredUser.map((user) => {
            return <Card user={user} key={user.id} />;
        })}
    </div>
}

export default Gallery;