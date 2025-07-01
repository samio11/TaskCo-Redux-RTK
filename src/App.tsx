import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="max-w-screen mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
