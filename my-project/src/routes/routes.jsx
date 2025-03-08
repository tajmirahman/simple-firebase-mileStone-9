import { createBrowserRouter } from "react-router-dom";

import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main />,
      children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        }
      ]
    },
  ]);

  export {router};