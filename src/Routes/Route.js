import { createHashRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Main from "../Layout/Main";
import Services from "../Pages/Services/Services";
import Career from "../Pages/Career/Career";
import Why from "../Pages/Why/Why";
import WebDevelopment from "../Pages/WebDevelopment/WebDevelopment";

const router = createHashRouter([
    {
        path: "/", element: <Main />, children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/services", element: <Services /> },
            { path: "/career", element: <Career /> },
            { path: "/why-us", element: <Why /> },
            { path: "/web-development", element: <WebDevelopment /> },
        ]
    }
])

export default router;