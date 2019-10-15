import React, { Component } from 'react';
import './App.css';
import WordFind from '../WordFind/WordFind'

class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">  </h1>
        </header>
        <br/>
        {/*<pre>{JSON.stringify(this.state.imageList)}</pre>*/}
        
        <WordFind />
      </div>
    );
  }
}

export default App;