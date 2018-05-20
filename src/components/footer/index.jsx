import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className = "page-footer" id="foot">
                PickaPet © 2018 by Janet Hwu, Elizabeth Martinez, Andres Martinez, & Daniel Strawbridge
                <div className="footer-copyright">
                    <div className="container">
                        Made with <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                    </div>
                </div>
            </footer>
      
        );
    }
}

export default Footer;