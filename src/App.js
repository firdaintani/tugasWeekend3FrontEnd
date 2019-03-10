import React, { Component } from 'react';

import Header from './components/header';
import './App.css';
// import {Button} from 'reactstrap';
import {Route} from 'react-router-dom';
import Homepage from './components/homepage';

class App extends Component {
  btnClick = () => {
    alert('masuk');
  }
  render() {
    return (
      <div>
        <Header/>

          <div className='container'>
          {/* <h1>hello world</h1> */}
          {/* <Form /> */}
          
          {/* <Footer nama='DIka' warna='blue' >Mhs </Footer>
 
          <Footer nama='Bagus'/> */}
          <Route path='/' component={Homepage} exact/>
          
        </div>
   
      </div>
    );
  }
}

export default App;
