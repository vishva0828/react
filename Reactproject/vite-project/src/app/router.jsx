import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Hooks from "../component/Hooks/hooks1";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },

    // {
    //   path: "/Hooks",
    //   element: <Hooks/>
    // }

    {
      path:"/card",
      element:<Carddesign/>
    },

    {
      path:"/addcart",
      element:<addcart></addcart>
    }
  ]
)

export default router;