// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
render(){
  return (
    <div className="App">
    <h1> Hello Bro!</h1>
    <p> This my name Saranya</p>
    <form>
    <input type="text" id="name" placeholder="           username" required ></input>
    <br/>
    <input type ="password" id="password" placeholder="            password" required></input>
    <br/>
    <button type="submit"> SUBMIT</button>
    </form>
    </div>
  )
}
}

export default App;
