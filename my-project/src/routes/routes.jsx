import { createBrowserRouter } from "react-router-dom";

import Main from "../components/Main/Main";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main />,
      children:[
        {
            path:'/',
            element:<Home />
        }
      ]
    },
  ]);

  export {router};