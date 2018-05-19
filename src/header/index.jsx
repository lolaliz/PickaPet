// build header component here
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header id="head">
                <h2>PickAPet</h2>
                <a href="/">Retake Survey</a> |
                <a href="https://github.com/jkhwu/PickaPet">GitHub</a> |
                <button type="submit" value="log out">Log Out</button>
            </header>
        );
    }
}

export default Header;