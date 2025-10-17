const Card = ({ user }) => {
    return (
        <div className="card-body w-[15%] h-[200px] rounded-2xl p-2 flex flex-col justify-between shadow-xl border-t-8 border-blue-400">
            <div className="text-section">
                <h1 className="text-2xl">{`${user.firstName} ${user.lastName}`}</h1>
                <h2 className="">Age: 27</h2>
                <h3>Contact:</h3>
                <h3 className="">+91 85860 81235</h3>
            </div>

            <button className="bg-blue-400 text-white p-2 rounded-xl cursor-pointer
                   transform transition-transform duration-[5000ms] ease-in-out
                   active:bg-green-300 hover:underline">
                View details
            </button>

        </div>)
}

export default Card;