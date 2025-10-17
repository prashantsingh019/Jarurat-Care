import { useSelector } from "react-redux";
import Card from "./Card";
function Gallery() {
    const data = useSelector((state) => state.patients);
    return <div className="app-body mt-5 flex gap-4 justify-center flex-wrap">
      {data.map((user) => {
            return <Card user={user} key={user.id} />;
        })}
    </div>
}

export default Gallery;