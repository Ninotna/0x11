import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/styles/layout.scss"; // Style du layout

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main>
                <Outlet /> {/* Contenu des pages */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
