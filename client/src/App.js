import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Colors } from "./constants/styles";
import { AuthProvider, AuthContext } from "./context/AuthContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blockchain from "./pages/Blockchain";
import NoPage from "./pages/NoPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTransaction from "./components/blockchain/CreateTransaction";
import PendingTransactions from "./components/blockchain/PendingTransactions";
import Blocks from "./components/blockchain/Blocks";
import Transaction from "./components/blockchain/Transactions";
import BalanceOffAddress from "./components/blockchain/BalanceOfAddress";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blockchain" element={<Blockchain />}>
              <Route index element={<><Blocks /><Transaction /></>} />
              <Route path="createTransaction" element={<CreateTransaction />} />
              <Route path="pendingTransactions" element={<PendingTransactions />} />
              <Route path="wallet" element={<BalanceOffAddress />} />
            </Route>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const Layout = () => {
  const { isAuthentication } = useContext(AuthContext);
  // console.log("authentication: ", isAuthentication);
  return (
    // <>
    //   {isAuthentication ? (
    <>
      <Header />
      <div style={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </>
    //   ) : (
    //     <></>
    //   )}
    // </>
  );
};

const styles = {
  container: {
    padding: "50px 3%",
    fontSize: 24,
    backgroundImage: `linear-gradient(${Colors.mainContainerBackColor},#101318)`,
  },
};
