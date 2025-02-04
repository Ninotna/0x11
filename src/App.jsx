import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PropertyDetails from "./pages/PropertyDetails";

const App = () => {
    return (
        <Routes>
            {/* Layout général qui inclut Header, Footer et le contenu des pages */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="housing/:id" element={<PropertyDetails />} />
                <Route path="*" element={<NotFound />} /> {/* Gestion des erreurs 404 */}
            </Route>
        </Routes>
    );
};

export default App;
