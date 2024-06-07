import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Home from "../pages/home/Home";
import Signup from "../pages/register/Signup";
import Menu from "../pages/shop/Menu";
// import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />
      }
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);

export default router