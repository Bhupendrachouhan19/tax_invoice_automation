import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/Home';
import Crypto from "./components/Crypto";
import Navbar from "./components/Navbar";
// import Search from './components/Search';
import ErrorPage from './components/ErrorPage';
import Invoice from './components/Invoice';
import Gov from './components/Gov';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Crypto"} component={Crypto} />
        {/* <Route exact path={"/search"} component={Search} /> */}
        <Route exact path={"/invoice"} component={Invoice} />
        <Route exact path={"/gov"} component={Gov} />
        <Route component={ErrorPage}/>
        </Switch>
    </BrowserRouter>
  )
}

export default App;