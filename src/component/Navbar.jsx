function Navbar(){
    return <div className="nav flex justify-between items-center">
        <h1 className="text-3xl">Jarurat Care 🩺</h1>
        <ul className="flex items-center gap-10 text-xl">
          <li>Home</li>
          <li>Patients</li>
          <li>About</li>
        </ul>
      </div>
}

export default Navbar;