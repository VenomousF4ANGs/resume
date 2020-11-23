import { BrowserRouter as Router ,Switch } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Profile from './Profile';
import Skills from './Skills';
import Work from './Work';
import Hobbies from './Hobbies';
import Downloads from './Downloads';

function Main() {
  return (
    <div>
      <Header/>
      <Router>
        <NavBar/>
        <Switch>
          <Router path="/"          exact> <Profile/>     </Router>
          <Router path="/profile"   exact> <Profile/>     </Router>
          <Router path="/skills"    exact> <Skills/>      </Router>
          <Router path="/work"      exact> <Work/>        </Router>
          <Router path="/hobbies"   exact> <Hobbies/>     </Router>
          <Router path="/downloads" exact> <Downloads/>   </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
