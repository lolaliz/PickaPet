import React from 'react';
import Header from '../header/index.jsx';
import Pets from '../pets/pets.jsx'
import Map from '../map/index.jsx'
import Footer from '../footer/index.jsx';
//import Title from '../title/title.jsx';
//import Description from '../description/description.jsx'

class ResultsLayout extends React.Component {
    render() {
        return(
            <div className="resultsLayout">
                <Header />
                <Pets />
                <Map />
                <Footer />
            </div>
        );
    }
}

export default ResultsLayout;