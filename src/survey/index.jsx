import React, { Component } from 'react';
import qBank from './qbank.js';

class Survey extends Component {

    state = {
        toggle: false
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    getInitialState = () => {
        return {
            selectedOption: 1
        };
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
        console.log('You have selected:', this.state.selectedOption);
    }

    render() {
        // console.log(qBank);
        return (
            <div className="Survey">
                <h2>Dog Breed Selector Quiz</h2>
                <ol>
                    {qBank.map((question) => {
                        console.log(question);
                        return <Question q={question.q} c={question.c} key={question.id} />
                    })}
                </ol>
                <button className="btn btn-default" type="submit" onClick={this.toggle}>See Available Dogs!</button>
                {this.state.toggle &&
                    <Results />
                }
            </div>
        );
    }
}

class Question extends Component {
    render() {
        const { q, c } = this.props;
        return (
            <li className="question">
                <p><strong>{q}</strong></p>
                <form onSubmit={this.handleFormSubmit} className="choices">
                    {c.map((choice) => {
                        return <Choice option={choice.option} num={choice.id} key={choice.id} />
                    })}
                </form>
            </li>
        );
    }
}

class Choice extends Component {
    render() {
        const { option, num } = this.props;
        return (
            <div className="radio">
                <label>
                    {/* <input type="radio" value={num} checked={this.state.selectedOption === num} onChange={this.handleOptionChange}/> */}
                    <input type="radio" value={num} checked={false}/>
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