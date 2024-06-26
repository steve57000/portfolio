import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import Home from '../pages/Home/Home';
// import Contact from './pages/Contact';
import NotFound from '../pages/NotFound/NotFound';
import CV from "../pages/CV/CV";
import useWindowSize from '../utils/hooks/useWindowSize';
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
    const { width } = useWindowSize();
    const sectionLayout = width < 763 ? 'one-column' : 'two-columns';
    return (
        <Router basename="/portfolio">
            <Routes>
                <Route path="/" element={<BasicLayout />}>
                    <Route index element={<Home />} />
                    {/*<Route path="contact" element={<Contact />} />*/}
                    <Route path="/cv" element={<CV layout={sectionLayout} />} />
                    <Route path="/*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default RouterApp;
