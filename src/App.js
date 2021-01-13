import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Learn from './components/pages/Learn/Learn';
import Home from './components/pages/Home/Home';
import UserContextProvider from './contexts/UserContext';
import PlaylistContextProvider from './contexts/PlaylistContext';
import Kiln from './components/pages/Kiln/Kiln';
import Join from './components/pages/Join/Join';
import axios from 'axios';
import ProfileContextProvider from './contexts/ProfileContext';
import Login from './components/pages/Login/Login';
import Armory from './components/pages/Armory/Armory';
import GrandKeep from './components/pages/GrandKeep/GrandKeep';

axios.defaults.baseURL = 'https://us-central1-the-forge-297301.cloudfunctions.net/api';

function App() {

  return (
    <div className="App">
      <ProfileContextProvider>
      <UserContextProvider>
        <PlaylistContextProvider>
          <Router>
            <Navigation/>
            <Switch>
              <Route path='/grandkeep' component={GrandKeep} />
              <Route path='/armory' component={Armory} />
              <Route path='/login' component={Login} />
              <Route path='/join' component={Join} />
              <Route path='/learn' component={Learn}/>
              <Route path='/kiln' component={Kiln}/>
              <Route path='/' component={Home}/>
            </Switch>
          </Router>
          </PlaylistContextProvider>
        </UserContextProvider>
      </ProfileContextProvider>
    </div>
  );
}

export default App;
