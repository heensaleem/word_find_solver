import React, { Component } from 'react';

class WordFind extends Component {
   
  state = {
    inputString : ''
  }

  handleChange = (event) => {
    console.log('in handleChange', event.target.value);
    this.setState({
        inputString: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('in handleSubmit', this.state.inputString );
    
  }
  render(){

    return (
      <div>
      <h2>Word Finder Search</h2>
      <pre>{JSON.stringify(this.state)}</pre>
      <form onSubmit={this.handleSubmit}>
          <input type='text'  onChange={this.handleChange} />
          <input type='submit' value='Find Words' />

      </form>
  </div>
    );
  }
}

export default WordFind;