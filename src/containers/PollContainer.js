import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import RadioButtonGroup from '../components/RadioButtonGroup.js';
import PollSubmitButton from '../components/PollSubmitButton.js';
import CurrentChoice from '../components/CurrentChoice.js';
// import data from '../data/data.json';
import CorrectChoice from '../components/CorrectChoice.js';
import $ from 'jquery';

class PollContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            header: '',
            question: '',
            correctAnswer: '',
            choices: [],
            checkedValue: ''
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    setCheckedValue(value){
        this.setState({
            checkedValue: value
        });
        console.log("current choice: " + value);
    }

    checkAnswer(){
        if (this.state.checkedValue===this.state.correctAnswer){
            console.log('correct');
        }
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount()');
    }
    componentDidMount() {
        console.log('componentDidMount()');
        this.serverRequest = $.get('http://localhost:8080/data/data.json', 
	    function (result) {
        var data = result;
        this.setState({
            header: data.poll.header,
            question: data.poll.questions[0].question,
            choices: data.poll.questions[0].choices,
            correctAnswer: data.poll.questions[0].correctAnswer
        });
        }.bind(this));

    }
    UNSAFE_componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }
    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate()');
        this.checkAnswer(this.state.checkedValue);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }
    

    render() {
        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
          };
        //   const choices = [
        //     {value: 'Tacos', label: 'Tacos'},
        //     {value: 'Pizza', label: 'Pizza'},
        //     {value: 'Cheese', label: 'Cheese'}
        //     ];
        

          
        return (
            <div className="container">
            <div className="jumbotron">
            <PollHeader text={this.state.header} />
            </div>
            <div className = "row" style = {rowStyle}>
                <div className="col-sm-4 col-sm-offset-4">  
                    <form>
                        <PollQuestion text={this.state.question} />
                        <RadioButtonGroup 
	                        name='answer' 
	                        checkedValue={this.state.checkedValue} 
                            choices={this.state.choices}
                            onChange = {this.setCheckedValue} />
                            <CurrentChoice 
                        text={this.state.checkedValue} />
                        <CorrectChoice checkedValue = {this.state.checkedValue}
                                         correctAnswer = {this.state.correctAnswer} />
                        <PollSubmitButton checkAnswer = {this.checkAnswer} />
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default PollContainer;