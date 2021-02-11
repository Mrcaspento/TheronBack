import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/landing'
import './App.css';
import SignUp from './components/Landing/SignUp'
import SignIn from './components/Landing/SignIn'
import axios from 'axios'
import Home from './pages/home';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {}
    }

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this)
  }

  getUser() {
    axios.get('/api/users').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          user: {}
        })
      }
    })
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(user) {
    this.setState(user)
  }


  render() {

    return (
      <Router>
        <div className="switch">

        <Switch >
          <Route exact path='/' component={Landing}>
           
          </Route>
          <Route path='/login' render={(props) =>
            <SignIn {...props} updateUser={this.updateUser} />
          } />
          <Route path='/signup' render={(props) =>
            <SignUp {...props} updateUser={this.updateUser} />
          } />
          
          <Route exact path='/home' component={Home} />
         
        </Switch>
        </div>
   
      </Router>
    );
  }
}

export default App;
