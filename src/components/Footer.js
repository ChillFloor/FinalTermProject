import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Grocery Store. </p>
                <p>Created by: David Li</p>
                <p>Logo: svgviewer, Images: freepik </p>
            </footer>
        );
    }
}
export default Footer;