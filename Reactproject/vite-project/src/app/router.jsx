import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Profile from "../component/Profile/profile";
import RegisterForm from "../component/Registration/register";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Profile",
      element: <Profile/>
    },
    {
      path:"/Registration",
      element: <RegisterForm></RegisterForm>
    }
  ]
)

export default router;