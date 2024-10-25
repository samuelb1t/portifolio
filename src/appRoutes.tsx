import StartApp from "./components/start/startApp";
import MainApp from "./components/main/mainApp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<StartApp/>}></Route>
                <Route path="/main" element={<MainApp/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;