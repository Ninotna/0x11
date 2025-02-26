import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import PropertyDetails from "./pages/Property/PropertyDetails";
import About from "./pages/About/About";
import Error404 from "./pages/NotFound/Error404";

function App() {
  return (
    // Activation du système de routage avec BrowserRouter
    <BrowserRouter>
      {/* Le header est affiché sur toutes les pages */}
      <Header />
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Page de détails d'un logement spécifique (id dynamique dans l'URL) */}
        <Route path="/logement/:id" element={<PropertyDetails />} />

        {/* Page "À propos" */}
        <Route path="/about" element={<About />} />

        {/* Gestion des erreurs : si aucune route ne correspond, affichage de la page 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
