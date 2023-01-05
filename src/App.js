import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Loader from "./components/Loader";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <Loader />
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Outlet />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};
