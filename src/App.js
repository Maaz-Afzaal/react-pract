import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menuComponent';
import { DISHES } from './shared/dishes';
import React,{Component} from 'react';
import Main from './components/MainComponent'
class App extends Component{
  render(){
  return (
    <div>
      <Main/>
    </div>
  );}
}

export default App;
