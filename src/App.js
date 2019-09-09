import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import CharacterCard from './CharacterCard';

let x = 10
class App extends Component{
render(){
  return(
    <div className="App">
      Fit eiei eiei unreal got  {x}
      <Content/>
      
    </div>
  );
}
}
export default App;
