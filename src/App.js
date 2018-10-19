import React from 'react';
import NavBar from './components/navbar/Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Badges, Users, NotFound } from './components';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/badges" component={Badges} />
          <Route path="/users" component={Users} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;
