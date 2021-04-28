
import './App.css';
import './Components/TenTwentyEight/TenTwentyEight';
import TenTwentyEight from './Components/TenTwentyEight/TenTwentyEight';
import BaseModule from './Components/BaseModule/BaseModule';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
        <Router>
            <BaseModule path="/"></BaseModule>
            <TenTwentyEight path="/1028"></TenTwentyEight>
        </Router>
    </div>
  );
}

export default App;
