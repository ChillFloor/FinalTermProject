import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

class Layout extends React.Component {
    render(){
        return (
            <div className="layout">
                <Header />
                <main className="main-content">
                    <Outlet />
                </main>>
                <Footer />
            </div>
        );
    }
}
export default Layout;