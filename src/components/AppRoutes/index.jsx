import { HashRouter as Router, Routes, Route } from "react-router";
import DefaultLayout from "../../layout/DefaultLayout";
import Home from "../../pages/Home";
import ModalDemo from "../../pages/ModalDemo";
import ScrollDemo from "../../pages/ScrollDemo";
import Profile from "../../pages/Profile";
import PerformanceDemo from "../../pages/PerformanceDemo";

function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal-demo" element={<ModalDemo />} />
                    <Route path="/scroll-demo" element={<ScrollDemo />} />
                    <Route
                        path="/performance-demo"
                        element={<PerformanceDemo />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}
export default AppRoute;
