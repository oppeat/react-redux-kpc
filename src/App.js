import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';
import FormPanel from './components/FormPanel'
import TablePanel from './components/TablePanel'

function App() {
  return (
    <div className="App">
      <Container>
        <FormPanel/>
        <TablePanel/>
      </Container>
    </div>
  );
}

export default App;
