import React, { Component } from 'react';
import './App.css';
import Person from './Searchbox/Searchbox';
import Select from 'react-select';

class App extends Component {
  options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  addOptions = () => {
    for(let i = 0; i<2000; i++) {
      this.options.push({ value: 'itemvalue' + i, label: 'itemlabel' + i});
    }
  }
  render() {
    this.addOptions();
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-2 bg-dark"></div>
          <div className="col-8">
            <div className="row bg-success text-center"><h1>React App</h1></div>
            <div className="row"><div className="col-4 m-auto"><Select options={this.options} /></div></div>
            <div className="row"> 
              <Person placeholder='input jumbo here' />
            </div>
           
          </div>
          <div className="col-2 bg-dark"></div>
        </div>
        
      </div>
    );
  }
}

export default App;
