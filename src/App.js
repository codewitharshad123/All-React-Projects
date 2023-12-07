import Sidebar from "./components/sidebar/Sidebar"
import TopBar from "./components/topbar/TopBar"
import Home from "./pages/home/Home"
import User from "./pages/user/User"
import "./app.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newProduct/NewProduct"
function App() {
  return (
    <Router>
<TopBar/>
<div className="container">
<Sidebar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/users" element={<UserList/>}/>
<Route path="/user/:userId" element={<User/>}/>
<Route path="/newUser" element={<NewUser/>}/>
<Route path="/products" element={<ProductList/>}/>
<Route path="/product/:productId" element={<Product/>}/>
<Route path="/newproduct" element={<NewProduct/>}/>
</Routes>
</div> 
    </Router>
  );
}
export default App;