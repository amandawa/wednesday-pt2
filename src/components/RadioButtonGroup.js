import React from 'react';
import RadioButton from './RadioButton.js';
import PropTypes from 'prop-types';
import CurrentChoice from './CurrentChoice';
import CorrectChoice from './CorrectChoice';

class RadioButtonGroup extends React.Component{
    
    render(){
        const choiceItems = this.props.choices.map(choice => {
            const {value, label} = choice;
            const checked = value === this.props.checkedValue;
            return (
                <RadioButton
                    key={`radio-button-${value}`}
                    label={label}
                    name={this.props.name}
                    value={value}
                    checked={checked}
                    onChange={this.props.onChange}
                />
            );
        });

        return (
            <div>
                {choiceItems}
                <CurrentChoice checked = {this.props.checkedValue} />
                <CorrectChoice
                    checkedValue = {this.props.checkedValue}
                    correctAnswer = {this.props.correctAnswer} /> 
               
            </div>
        );
    }
}

RadioButtonGroup.propTypes = {
    name: PropTypes.number,
    checkedValue: PropTypes.array,
    choices: PropTypes.array,
    onChange: PropTypes.func
}
export default RadioButtonGroup;