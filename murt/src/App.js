import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>Some str</Button>
      </header>
    </div>
  );
}

export default App;