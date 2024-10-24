

const Navbar = () => {
    return (
        <div className="md:w-10/12 mx-auto mt-6">
            <div className="navbar bg-base-100">
                <div className="navbar-start"> 
                    <a className="btn btn-ghost text-3xl text-green-400">Chef's Dine</a>
                </div>
                <div className="navbar-center hidden lg:flex gap-10 text-gray-500">
                    <a href="" className=" hover:text-green-400">Home</a>
                    <a href="" className=" hover:text-green-400">Recipe</a>
                    <a href="" className=" hover:text-green-400">About</a>
                    <a href="" className=" hover:text-green-400">Search</a>
                </div>
                <div className="navbar-end gap-20">
                <div>
                <i className="fa-solid fa-magnifying-glass translate-x-7 relative text-gray-400"></i>
                    <input className=" rounded-full pl-8 p-3 bg-gray-100" placeholder="Search" type="search" name="" id="" />
                </div>
                   <div className="bg-green-400 h-14 w-14 rounded-full flex justify-center items-center">
                   <i className="fa-regular text-xl fa-user border-2 w-8 flex justify-center items-center border-black rounded-full"></i>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;