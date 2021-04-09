import NavBar from './NavBar'

import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      
      <div className="App">
            <NavBar></NavBar>
      </div>
    
    </Router>
  );
}

export default App;
