const API = "https://dummyjson.com/users";
const fetchData = async()=>{
    try{
     const res = await fetch (API);
     if(!res.ok){
        throw new Error `status: ${res.status}`;
     }
     const data = await res.json();
     return data;
    }catch(err)
    {
     console.error(err.message);
    }
}