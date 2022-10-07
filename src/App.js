import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import Contact from './Component/Contact';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';
import Gallery from './Component/Gallery';
import Sell from './Component/Sell';
import Payment from './Component/Payment';
import Admin from './Component/Admin';
const App=()=>{
  return(
    <>
    <List/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/sell" component={Sell}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/admin" component={Admin}/>
        <Route  component={Error}/>
      </Switch>
    
    <Footer/>
    </>
  )
}

export default App;