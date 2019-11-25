import React, { Component } from 'react';
import { Route,Switch,  BrowserRouter as Router} from 'react-router-dom'
//import all website componetns
  import Home from '../views/website/Components/Home'
  import Team from '../views/website/Components/Team'
  import Contact from '../views/website/Components/Contact'
  import Footer from '../views/website/Components/Footer'
  import Header from '../views/website/Components/Header'
  import PortFolio from '../views/website/Components/PortFolio'
  import Service from '../views/website/Components/Service'
  import About from '../views/website/Components/About'
class websiteRouter extends Component {
  render() {
    return (
      <div>
         <Header /> 
          <div>
            <Route exact path="/" component={Home} />
            <Route  path="/about" component={About} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/service" component={Service} />
            <Route  path="/portfolio" component={PortFolio} />
            <Route  path="/team" component={Team} />
          </div> 
          <Footer />
         
        </div>);
  }
}

export default websiteRouter;
