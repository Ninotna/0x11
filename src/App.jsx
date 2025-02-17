import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/404";
import PropertyDetails from "./pages/Property/PropertyDetails";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      {/* Layout général qui inclut Header, Footer et le contenu des pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="housing/:id" element={<PropertyDetails />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Gestion des erreurs 404 */}
      </Route>
    </Routes>
  );
};

export default App;
