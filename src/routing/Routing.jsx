import { Route,Routes } from "react-router-dom"
import App from "../App"
import AboutUs from "../Pages/AboutUs"
import Cart from "../Pages/Cart"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Products from "../Pages/Products"
import ProductDetails from "../Pages/ProductDetails"
import Error404 from "../Pages/Error404"

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/error" element={<Error404/>}/>

        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/details" element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Routing