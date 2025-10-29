import { HashRouter as Router, Routes, Route } from "react-router";
import DefaultLayout from "../../layout/DefaultLayout";
import Home from "../../pages/Home";
import ModalDemo from "../../pages/ModalDemo";
import ScrollDemo from "../../pages/ScrollDemo";
import Profile from "../../pages/Profile";
import PerformanceDemo from "../../pages/PerformanceDemo";
import FocusDemo from "../../pages/FocusDemo";
import HocDemo from "../../pages/HOCDemo";
import RenderPropsDemo from "../../pages/RenderPropsDemo";
import CustomHooksDemo from "../../pages/CustomHooksDemo";

function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal-demo" element={<ModalDemo />} />
                    <Route path="/scroll-demo" element={<ScrollDemo />} />
                    <Route path="/hoc-demo" element={<HocDemo />} />

                    <Route
                        path="/render-props-demo"
                        element={<RenderPropsDemo />}
                    />
                    <Route
                        path="/performance-demo"
                        element={<PerformanceDemo />}
                    />
                    <Route
                        path="/custom-hooks-demo"
                        element={<CustomHooksDemo />}
                    />
                    <Route path="/focus-demo" element={<FocusDemo />} />
                </Route>
            </Routes>
        </Router>
    );
}
export default AppRoute;
