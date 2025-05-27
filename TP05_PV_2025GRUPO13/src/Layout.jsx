import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <NavBar />
      <hr />
      <Outlet />
    </div>
  );
}
export default Layout;