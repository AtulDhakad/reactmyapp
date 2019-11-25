import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import WebsiteRouter from './routes/websiteRouter'
//import Adminrouter from './routes/adminRouter'
function App() {
  return (<div className="App">
  <Router>
    <div>  
     <Switch>
      <Route  path="/" component={WebsiteRouter} />
      {/* <Route path="/" component={Adminrouter} /> */}
     </Switch>
    </div>
  </Router>
</div>
  );
}

export default App;
