import { BrowserRouter as Router, Routes, Route } from "react-router";
import DefaultLayout from "../../layout/DefaultLayout";
import Home from "../../pages/Home";
function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Home />} />
                    <Route path="/modal-demo" element={<Home />} />
                    <Route path="/scroll-demo" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}
export default AppRoute;
