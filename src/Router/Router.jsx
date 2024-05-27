import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import Home from '../pages/Home/Home';
// import Contact from './pages/Contact';
import NotFound from '../pages/NotFound/NotFound';
import CV from "../pages/CV/CV";

function BasicLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

function RouterApp() {
    return (
        <Router basename="portfolio">
            <Routes>
                <Route element={<BasicLayout />}>
                    <Route index element={<Home />} />
                    {/*<Route path="contact" element={<Contact />} />*/}
                    <Route path="cv" element={<CV layout="one-column" />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default RouterApp;
