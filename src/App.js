import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menuComponent';
import { DISHES } from './shared/dishes';
import React,{Component} from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div>
        <Main/>
      </div>
    </BrowserRouter>
    
  );}
}

export default App;
