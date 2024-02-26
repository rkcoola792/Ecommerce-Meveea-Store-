import './App.css'
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ArtistProducts from './components/artists/ArtistProducts';

const Layout=()=>{
  return<>
  <Navbar></Navbar>
  <Outlet></Outlet>
    <Footer></Footer>
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/products/:id",
        element: <Products></Products>,
      },
      {
        path: "/artists/:name",
        element: <ArtistProducts></ArtistProducts>,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
function App() {
  return (
    <div >
    <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
