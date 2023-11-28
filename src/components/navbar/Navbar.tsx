import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="relative top-0 z-9999">
      <nav className="bg-white text-gray-900 w-full z-20 top-0 left-0 border-2">
        <div className="max-w-[1280px] w-full flex items-center justify-between mx-auto p-4">
          {/* .................logo........................... */}
          <Link
            className={
              "self-center text-2xl font-bold whitespace-nowrap "
            }
            to={"/"}
          >
            DMM
          </Link>
          {/* .................login and signup button.............. */}
          <div className="flex items-center justify-between  md:order-2 flex-grow max-w-[300px]">
            <ul className="flex flex-col md:p-0 font-medium borderrounded-lg  md:border-0 ">
              <li>
                <Link
                  className={
                    "block py-2 px-4 text-gray-900 rounded-full border border-transparent hover:border hover:border-amber-700 "
                  }
                  to={"/support"}
                >
                  Support
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="text-amber bg-white-700 border-gray-500 border rounded-full px-4 py-2 hover:shadow-md"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-gray-900 border rounded-full px-4 py-2 hover:bg-gray-700"
            >
              Signup
            </button>
          </div>

          {/* ...............service button lists................... */}
          <div className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1 flex-grow max-w-[600px]">
            <ul className="flex items-center justify-between p-4 font-medium rounded-lg md:flex-row w-full">
              <li>
                <Link
                  className={
                    "block py-2 px-4 text-gray-900 rounded-full border border-transparent hover:border hover:border-amber-700  "
                  }
                  to={"/car"}
                >
                  Car Rental
                  
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "block py-2 px-4 text-gray-900 rounded-full border border-transparent hover:border hover:border-amber-700  "
                  }
                  to={"/jet"}
                >
                  Private Jet
                  <div className="bg-amber-700 " />
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "block py-2 px-4 text-gray-900 rounded-full border border-transparent hover:border hover:border-amber-700  "
                  }
                  to={"/boat"}
                >
                  Boat Charter
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "block py-2 px-4 text-gray-900 rounded-full border border-transparent hover:border hover:border-amber-700  "
                  }
                  to={"/driver"}
                >
                  Driver
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "block py-2 px-4 text-gray-900 rounded-full border border-transparent hover:border hover:border-amber-700  "
                  }
                  to={"/truck"}
                >
                  Truck
                </Link>
              </li>
            </ul>
          </div>

          {/* ............menu icon.................. */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
