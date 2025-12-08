import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import './App.css';
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
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
                        <Route path="products" element={<Products />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="productDetail/:sku" element={<ProductDetail />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        );
    }
}

export default App;
