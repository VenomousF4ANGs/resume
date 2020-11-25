import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom';
import _ from 'lodash';
import Header from './Header';
import NavBar from './NavBar';
import data from '../resources/data.json';

function Main() {
  return (
    <div>
      <Header data={data.header} />
      <Router>
        <NavBar data={data.navbar} />
        <Switch>
          {
            _.map( 
              _.values(data.navbar) , 
              (nav)=>{
                let Component = require('./'+nav.view).default;
                return <Route path={nav.url} exact key={nav.url}> <Component data={data.sections[nav.body]} /> </Route>
              } 
            )
          }
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
