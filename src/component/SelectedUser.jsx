import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
function SelectedUser() {
    const data = useSelector((state) => state.patients);
    return <div>

        {
            data.map((user) => {
                return <ProfileCard data={user} key={user.id} />
            })
        }

    </div>
}

export default SelectedUser;