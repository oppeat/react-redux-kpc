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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add">Add</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/add">
                <FormPanel />
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
