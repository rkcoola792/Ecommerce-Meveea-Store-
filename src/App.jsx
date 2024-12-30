import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Products from "./pages/Products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import TopHeader from "./components/topHeader/topHeader";
import Home from "./pages/home/Home";
import Cart from "./components/cart/Cart";
import CartNew from "./components/cartNew/cartNew";

const Layout = ({ Component }) => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <div className="content">
        <Component />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout Component={Home} />, // Home page with Layout
  },
  {
    path: "/products/:id",
    element: <Layout Component={Products} />, // Product page with Layout
  },
  // Add more routes here
  {
    path: "/cart",
    element: <Layout Component={()=><CartNew name="cart" />} />,
  },
  {
    path: "/wishlist",
    element: <Layout Component={() => <CartNew name="wishlist" />} />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
