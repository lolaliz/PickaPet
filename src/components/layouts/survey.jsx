import React from 'react';
import Header from '../header/index.jsx';
import Survey from '../survey';
import Footer from '../footer/index.jsx';
import Title from '../title/title.jsx';
import Description from '../description/description.jsx'

class SurveyLayout extends React.Component {
    render() {
        return(
            <div className="surveyLayout">
                <Header />
                <Title />
                <Description />
                <Survey />
                <Footer />
            </div>
        );
    }
}

export default SurveyLayout;