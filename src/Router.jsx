
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";


const router = createBrowserRouter([
  {
    path: "/",   
     element: <App />,
     children: [
        {

            path: "",
            element: <Home />,
        },
        {
            path: "/product",
            element: <Product />, 
        },
        {
            path: "/cart",
            element: <Cart />,
        },
        {
            path: "/login",
            element: <Login />,
        }
    ]
}]);
export default router;