import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Colors } from "./constants/styles";
import { BlockchainProvider } from "./context/Context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BalanceOffAddress from "./components/blockchain/BalanceOfAddress";

import Home from "./pages/Home";
import Blockchain from "./pages/Blockchain";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="blockchain"
            element={
              <BlockchainProvider>
                <Outlet />
              </BlockchainProvider>
            }
          >
            <Route index element={<Blockchain />} />
            <Route path="wallet" element={<BalanceOffAddress />} />
          </Route>
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
      <Header />
      <div style={styles.container}>
        <Outlet />
      </div>
      <Footer />
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
