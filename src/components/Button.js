import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    //  state = {
    //    buttonText: 'I am a button?'
    //  };
    
    //  constructor(props) {
    //    super(props);
       
      //  setTimeout (() => {
      //    this.setState({
      //      buttonText: 'Click me!',
      //    });
      //  }, 2000);
    //  }
     
    //  componentWillMount () {
    //    console.log('componentWillMount')
    //  }
     
    //  componentDidMount() {
    //    console.log('componentDidMount')
    //  }
     
    //  shouldComponentUpdate () {
    //    console.log('shouldComponentUpdate')
    //  }
      render() {
        return (
          <button className='my-button' onClick={this.props.doThisWhenClicked}>
          {this.props.text}</button>
        );
      }
    }

    export default Button;