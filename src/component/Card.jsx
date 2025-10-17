import { useNavigate } from "react-router-dom";

const Card = ({ user }) => {
    const { id,firstName, lastName, age, phone } = user;
    const navigate = useNavigate();
    function handleClick(){
     navigate(`user/${id}`);
    }
    return (
        <div className="card-body m-w-[10%] lg:w-[15%] h-[220px] rounded-2xl p-2 flex flex-col justify-between shadow-xl border-t-8 border-blue-400 sm:w-[40%]">
            <div className="text-section">
                <h1 className="text-xl">{`${firstName} ${lastName}`}</h1>
                <h2 className="">Age: {`${age}`}</h2>
                <h3>Contact:</h3>
                <h3 className="">{phone}</h3>
            </div>
            <button onClick={handleClick} className="bg-blue-400 text-white p-1 rounded-xl cursor-pointer
                   transform transition-transform duration-[5000ms] ease-in-out
                   active:bg-green-300 hover:underline">
                View details
            </button>

        </div>)
}

export default Card;