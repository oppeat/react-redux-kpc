import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';
import FormPanel from './components/FormPanel'
import TablePanel from './components/TablePanel'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/react-redux-kpc/">Home</Link>
                </li>
                <li>
                  <Link to="/react-redux-kpc/add">Add</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/react-redux-kpc/add">
                <FormPanel />
              </Route>
              <Route path="/react-redux-kpc/">
                <TablePanel />
              </Route>
              <Route path="/">
                <TablePanel />
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
