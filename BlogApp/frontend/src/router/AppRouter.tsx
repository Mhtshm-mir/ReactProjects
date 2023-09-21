import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../app/App";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import Blogs from "../features/blog/Blogs";
import ProtectedRoute from "../components/ProtectedRoute";
import Auth from "../features/auth/Auth";

const AppRouter = () => {
  const  router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
     children:[

      {
        path:"auth",
        element:<Auth/>,
        children:[
          {
            path:"login",
            element:<Login/>
          },
            {
                path:"signup",
                element:<Signup/>,
                
            },
        ]
      },
        {
          element: <ProtectedRoute />,
          children:[
            {path:"blogs",element:<Blogs/>}
          ] 
        },

      ]
    }
    
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;