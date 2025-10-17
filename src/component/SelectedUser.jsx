import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";

function SelectedUser() {
    const param = useParams();
    const {id} = param;
    const data = useSelector((state) => state.patients);
    const filteredUser = data.filter((user)=>user.id == id);
    
    
    return <div className="bg-gray-100 mt-5 rounded-2xl shadow">

        {
            filteredUser.map((user) => {
                return <ProfileCard data={user} key={user.id} />
            })
        }

    </div>
}

export default SelectedUser;