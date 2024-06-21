import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Contact from "./pages/Contact.jsx";
import Historique from "./pages/Historique.jsx";
import Benevole from "./pages/Benevole.jsx";
import Admin from "./pages/Admin.jsx";
import ErrorBoundary from "./ErrorBoundary.js";
import Menu from "./components/Menu.jsx";
import Construction from "./pages/Construction.jsx";
import Footer from "./components/Footer.jsx";
import MentionsLegales from "./pages/MentionsLégales.jsx";
import { DataProvider } from "./pages/DataContext.jsx";
import routes from "./routesConfig.js";

function App() {
  return (
    <ErrorBoundary>
      <DataProvider>
        <Router>
          <div>
            <Menu />
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/historique" element={<Historique />} />
              <Route path="/benevole" element={<Benevole />} />
              <Route path="/construction" element={<Construction />} />
              <Route path="/admin" element={<Admin />} />
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
              <Route path="/mentionslegales" element={<MentionsLegales />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </DataProvider>
    </ErrorBoundary>
  );
}

export default App;
