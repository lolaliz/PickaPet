import React from 'react';
import Header from '../header/index.jsx';
import Survey from '../survey';
import Footer from '../footer/index.jsx';
import Title from '../title/title.jsx';

class SurveyLayout extends React.Component {
    render() {
        return(
            <div className="surveyLayout">
                <Header />
                <Survey />
                <Title />
                <Footer />
            </div>
        );
    }
}

export default SurveyLayout;