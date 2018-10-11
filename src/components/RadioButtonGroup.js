import React from 'react';
import RadioButton from './RadioButton.js';
import PropTypes from 'prop-types';

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
            </div>
        );
    }
}

RadioButtonGroup.propTypes = {
    name: PropTypes.array,
    checkedValue: PropTypes.bool,
    choices: PropTypes.number,
    onChange: PropTypes.string
}
export default RadioButtonGroup;