import React, { Component } from 'react';
import qBank from './qbank.js';

class Survey extends Component {
    constructor() {
        super();
        
        this.state = {
          answers: new Array(10).fill(false),
        };

        this.handleOptionChange = this.handleOptionChange.bind(this); // do this if you're passing down a function
    }

    handleOptionChange(num, name) {
        let newAnswers = this.state.answers;
        newAnswers[name-1] = num;
        console.log(newAnswers);
        this.setState({
            answers: newAnswers
        });
    }

    handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
        console.log('Submit');
        // add more stuff here
    }

    render() {
        return (
            <div className="Survey">
                <h2>Dog Breed Selector Quiz</h2>
                <form onSubmit={this.handleFormSubmit} className="choices">
                    <ol>
                        {qBank.map((question) => {
                            return <Question q={question.q} c={question.c} name={question.id} key={question.id} handleOptionChange={this.handleOptionChange}/>
                        })}
                    </ol>
                    <button className="btn btn-default" type="submit" onClick={this.toggle}>See Available Dogs!</button>
                </form>
                {this.state.toggle &&
                    <Results />
                }
            </div>
        );
    }
}

class Question extends Component {
    render() {
        const { q, c, name, handleOptionChange } = this.props;
        return (
            <li className="question">
                <p><strong>{q}</strong></p>
                
                    {c.map((choice) => {
                        return <Choice 
                            option={choice.option} 
                            num={choice.id} 
                            name={name} 
                            key={choice.id} 
                            handleOptionChange={handleOptionChange}
                        />
                    })}
        
            </li>
        );
    }
}

class Choice extends Component {
    render() {
        const { option, num, name, handleOptionChange } = this.props;
        return (
            <div className="radio">
                <label>
                    <input type="radio" 
                    name={name} 
                    value={num} 
                    onClick={()=> handleOptionChange(num, name)}/>
                    {option}
                </label>
            </div>
        );
    }

}

class Results extends Component {
    render() {
        return (
            <p><img src="https://media.giphy.com/media/gcXcSRYZ9cGWY/giphy.gif" alt="puppies" /></p>
        );
    }
}

export default Survey;