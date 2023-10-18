import Header from "./component/header-cap/Header";
import InicioSection from "./pages/InicioSection";
import SobreNosotrosSection from "./pages/SobreNosotrosSection";
import Comunidad from "./pages/Comunidad";
import EducacionSection from "./pages/EducacionSection";
import Footer from "./component/footer-cap/Footer";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<InicioSection />} />
        <Route path="/sobre-nosotros" element={<SobreNosotrosSection />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/educacion" element={<EducacionSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
