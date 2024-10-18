import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    errorElement:<Error/>,
    children:[
      {path: '', element: <HomePage /> }, //each object each route, path is the part after the domain
      {path:'products', element: <ProductsPage/>},
      {path:'products/:productId', element: <ProductDetail/>}
    ],
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
