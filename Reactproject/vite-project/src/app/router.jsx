import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Profile from "../component/Profile/profile";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Profile",
      element: <Profile/>
    }
  ]
)

export default router;