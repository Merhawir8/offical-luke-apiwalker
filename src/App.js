import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import First from './components/First';
import Second from './components/Second';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Router>
        <First path="/" />
        {/* <First path="/people" /> */}
        {/* <Second path="/planets" /> */}


      </Router>
    </div>
  );
}

export default App;