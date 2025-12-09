import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Li Website. </p>
                <p>Created by: David Li</p>
                <p>Non-Gallery Images: freepik </p>
            </footer>
        );
    }
}
export default Footer;