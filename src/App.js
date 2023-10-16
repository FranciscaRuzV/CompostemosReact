import Header from "./component/Header";
import InicioSection from "./pages/InicioSection";
import SobreNosotrosSection from "./pages/SobreNosotrosSection";
import Footer from "./component/Footer";
import { Route, Routes, Link } from "react-router-dom";
import Comunidad from "./pages/Comunidad";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<InicioSection />} />

        <Route path="/sobre-nosotros" element={<SobreNosotrosSection />} />
        <Route path="/comunidad" element={<Comunidad />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
