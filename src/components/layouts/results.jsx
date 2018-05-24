import React from 'react';
import Header from '../header/index.jsx';
import Pets from '../pfResults/pets'
import Footer from '../footer/index.jsx';
import Title from '../title/title.jsx';
//import Description from '../description/description.jsx'

class ResultsLayout extends React.Component {
    render() {
        return(
            <div className="resultsLayout">
                <Header />
                <Pets />
                <Footer />
            </div>
        );
    }
}

export default ResultsLayout;