// import RegisterUser from "./components/RegisterUser";
import app from '../src/app.css'
import Home from "./components/Home";
import RegisterUser from './components/RegisterUser'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./admin/AddProduct";
import NotFound from "./admin/NotFound";
import About from "./components/About"
import Layout from "./components/Layout";
import Blog from "./components/Blog";
import ViewProduct  from './user/ViewProduct';
import CartPage from './user/CartPage';
import BookByCategory from './components/BookByCategory';
import BookById from './components/BookById';
import Contact from './components/Contact';

function App() {
  return (
    <> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/viewProduct" element={<ViewProduct/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/register" element={<RegisterUser/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/dashboard' element={<AddProduct/>}></Route>
        <Route path="/not-authorized" element={<NotFound/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/category' element={<BookByCategory/>}></Route>
        <Route path='/book/:id' element={<BookById/>}></Route>
        </Route>
      </Routes> 

      </BrowserRouter>
    </>
  );
}

export default App;
