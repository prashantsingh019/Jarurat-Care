const ProfileCard = ({ data }) => {
    

    const {firstName, lastName, age, gender, bloodGroup, height, weight, eyeColor, phone, email, address: { address: street, city, state, postalCode } = {},  } = data;
    
    return (
        <div className="card-body lg:max-h-[500px] rounded-xl pb-10 pt-10">
            <div className="top w-[90%] m-auto">
                <h1 className="text-3xl">{`${firstName} ${lastName}`}</h1>
                <h2 className="text-xl text-gray-400 font-light">{`${city},${state}`}</h2>
            </div>
            <div className="details sm:flex-col lg:flex-row flex m-auto w-[90%] lg:gap-4 sm:gap-0 pt-5">
                <div className="div-left mr-2 py-8 text-xl w-[48%] border px-2 rounded border-gray-100">
                    <h3 className="flex justify-between"> <span>Age</span>              <span className="font-light"> {age}</span> </h3>
                    <h3 className="flex justify-between"> <span>Gender</span>           <span className="font-light"> {gender}</span> </h3>
                    <h3 className="flex justify-between" ><span>Blood Group</span>      <span className="font-light"> {bloodGroup}</span>  </h3>
                    <h3 className="flex justify-between" ><span>Height</span>           <span className="font-light"> {height}</span> </h3>
                    <h3 className="flex justify-between" ><span>Weight (in Kgs)</span>  <span className="font-light"> {weight}</span> </h3>
                    <h3 className="flex justify-between" ><span>Eye color</span>        <span className="font-light"> {eyeColor}</span> </h3>
                </div>

                <div className="div-right inline-block mr-2 py-8 w-[48%] border text-xl px-2 rounded border-gray-100">
                    <h3 className="flex justify-between" ><span>Phone</span>       <span className="font-light">{phone}</span> </h3>
                    <h3 className="flex justify-between" ><span>Email</span>       <span className="font-light"> {email}</span> </h3>
                    <h3 className="flex justify-between" ><span>Address</span>     <span className="font-light"> {street}</span> </h3>
                    <h3 className="flex justify-between" ><span>City</span> <span className="font-light"> {city}</span> </h3>
                    <h3 className="flex justify-between" ><span>State</span> <span className="font-light"> {state}</span> </h3>
                    <h3 className="flex justify-between" ><span>Pin Code</span> <span className="font-light"> {postalCode}</span> </h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;