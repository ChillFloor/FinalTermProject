import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import './App.css';
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import NotFound from "./pages/NotFound";
import Hobbies from "./pages/Hobbies";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

class App extends React.Component{
    render() {
        return (
            <BrowserRouter basename="/FinalTermProject">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Hobbies />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="resume" element={<Resume />} />
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="galleryDetail/:sku" element={<GalleryDetail />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        );
    }
}

export default App;
