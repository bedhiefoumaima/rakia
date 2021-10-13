
import './App.css';
import Person from './components/Person';
import React, { Component } from 'react'

class App extends Component {
 state={show:false}
 handleData=()=> {
   this.setState({show: !this.state.show})

 }
 componentDidMount () {
   alert("mounted")
 }
  render() { 
    return ( 
     <div className="App">
       <button type="button" className="btn btn-warning" onClick={this.handleData}> {this.state.show? "disapper":"appear"} </button>
       {this.state.show?<Person/> : null}
     </div>

    );
  }
}
 
export default App;
