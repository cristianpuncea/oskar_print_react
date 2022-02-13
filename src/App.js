import "./App.css";
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import MainProducts from "./components/MainProducts/MainProducts";
import AboutProducts from "./components/AboutProducts/AboutProducts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <MainProducts />
      <AboutProducts />
      <Footer />
    </>
  );
}

export default App;
