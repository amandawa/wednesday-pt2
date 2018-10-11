import React from 'react';

// class CurrentChoice extends React.Component{
//     render(){
//         return (<h5>{this.props.text}</h5>);
//     }
// }

//Using stateless Functional components
function CurrentChoice(props){
    return(<div>Current selection: {props.checked}</div>);
}

export default CurrentChoice;