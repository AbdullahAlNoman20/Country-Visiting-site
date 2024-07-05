import "./App.css";
import Countries from "./Components/Countries/Countries";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      {/* Navber */}
      <div className="navbar bg-base-100 flex justify-between">
        <div className="flex-1">
          <h1 className=" lg:font-extrabold text-sm lg:text-5xl font-bold">React World Tour</h1>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/Tv0Mppf/nmn.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Countries></Countries>
      <hr />
      <Footer></Footer>
    </>
  );
}

export default App;
