import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";

import { Card } from "./pages/Card";
import { Catalogo } from "./pages/Catalogo";
import { Home } from "./pages/Home"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/card" element={<Card />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}