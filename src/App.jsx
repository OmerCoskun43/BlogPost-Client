import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "./pages/User";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";

function App() {
  const { token } = useSelector((state) => state.auth);
  // console.log("token :>> ", token);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={token ? <Blogs /> : <Auth />} />
          <Route path="/users" element={<User />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={token ? <Profile /> : <Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
