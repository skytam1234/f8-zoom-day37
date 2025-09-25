import { BrowserRouter as Router, Routes, Route } from "react-router";
import DefaultLayout from "../../layout/DefaultLayout";
import Home from "../../pages/Home";
import ModalDemo from "../../pages/ModalDemo";
function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Home />} />
                    <Route path="/modal-demo" element={<ModalDemo />} />
                    <Route path="/scroll-demo" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}
export default AppRoute;
