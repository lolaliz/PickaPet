import React from 'react';
import Header from '../header/index.jsx';
import Footer from '../footer/index.jsx';
import Pets from '../pfResults/pets.jsx'

class PetResultsLayout extends React.Component {
    render() {
        return(
            <div className="surveyLayout">
                <Header />
                <Pets />
                <Footer />
            </div>
        );
    }
}

export default PetResultsLayout;


