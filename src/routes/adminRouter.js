import React, { Component } from 'react';
import { Route,Switch,  BrowserRouter as Router} from 'react-router-dom'
//import all website componetns
  import Header from '../views/admin/Components/Header'
  import Footer from '../views/admin/Components/Footer'
  import Dashboard from '../views/admin/Components/Dashboard'
class adminRouter extends Component {
  render() {
    return (
      <div>
         <Header /> 
          <div>
            <Route   path="/dashboard" component={Dashboard} />
         
          </div> 
          <Footer />
         
        </div>);
  }
}

export default adminRouter;
