import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Badges, Users, NotFound, BadgeEditor, UserEditor, Navbar } from './components/main';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/badges" component={Badges} />
          <Route path="/badge" exact component={BadgeEditor} />
          <Route path="/badge/:id" component={BadgeEditor} />
          <Route path="/users" component={Users} />
          <Route path="/user" exact component={UserEditor} />
          <Route path="/user/:id" component={UserEditor} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;
