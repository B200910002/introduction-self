import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Colors } from "./constants/styles";
import { AuthProvider } from "./context/AuthContext";

import Auth from './pages/Auth'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blockchain from "./pages/Blockchain";
import Bookstore from "./pages/Bookstore";
import NoPage from "./pages/NoPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTransaction from "./components/blockchain/CreateTransaction";
import PendingTransactions from "./components/blockchain/PendingTransactions";
import Blocks from "./components/blockchain/Blocks";
import Transaction from "./components/blockchain/Transactions";
import BalanceOffAddress from "./components/blockchain/BalanceOfAddress";
import ViewAuthor from "./components/bookstore/ViewAuthor";
import ViewOriginBook from "./components/bookstore/ViewOriginBook";
import ViewEditionBook from "./components/bookstore/ViewEditionBook";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blockchain" element={<Blockchain />}>
              <Route index element={<><Blocks /><Transaction /></>}/>
              <Route path="createTransaction" element={<CreateTransaction />} />
              <Route path="pendingTransactions" element={<PendingTransactions />}/>
              <Route path="wallet" element={<BalanceOffAddress />} />
            </Route>
            <Route path="bookstore" element={<Bookstore />}>
              <Route index element={<></>} />
              <Route path="author" element={<ViewAuthor />} />
              <Route path="originBook" element={<ViewOriginBook />} />
              <Route path="editionBook" element={<ViewEditionBook />} />
            </Route>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const Layout = () => {
  const isAuth = localStorage.getItem("token");
  return (
    <>
      {isAuth ? (
        <>
          <Header />
          <div style={styles.container}>
            <Outlet />
          </div>
          <Footer />
        </>
      ) : (
        (window.location.href = "/auth/login")
      )}
    </>
  );
};

const styles = {
  container: {
    padding: "50px 3%",
    fontSize: 24,
    backgroundImage: `linear-gradient(${Colors.mainContainerBackColor},#101318)`,
  },
};
