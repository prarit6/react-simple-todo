import { Link } from "react-router-dom";
function Navbar() {
  return (
   <nav className="bg-gradient-to-b from-yellow-400 to-yellow-200 sticky w-full z-20 top-0 shadow-lg">
      <div className="max-w-screen-full flex flex-wrap items-center justify-between mx-auto px-8 py-4">
        <Link to={"/"}>
          <span className="self-center text-3xl whitespace-nowrap text-white">
             <strong>SimpleToDo</strong> 
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
