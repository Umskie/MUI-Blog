import Home from "./components/Pages/Home";
import Body from "./components/Layout/Body/Body";

import {createBrowserRouter,} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/Pages/Home",
      element: <Home/>
    }
    
    ,
    
    {
      path: "Layout/Body",
      element: <Body/>
    }
    
 
     
  ]);

  export default router