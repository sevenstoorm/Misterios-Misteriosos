import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProdutosPage from "./pages/ProdutosPage";
import FaqPage from "./pages/FAQ/FaqPage";

function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
