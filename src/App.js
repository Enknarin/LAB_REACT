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
      Hello word {x}
      <Content/>
      
    </div>
  );}
  
class App extends Component {
 render() {
 return (
 <div>
 <CharacterCard value="h"/>
<CharacterCard value="i"/>
 </div>
 );
 }
}

}
export default App;
