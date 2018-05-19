import React from 'react';
import Header from '../header/index.jsx';

class HomeLayout extends React.Component {
    render() {
        return(
            <div class="homeLayout">
                <Header />
                <Banner />
                <Login />
                <Footer />
            </div>
        );
    }
}

// ComponentDidMount() {
//     axios.get(/pitbull).then()
//         .catch()
// }