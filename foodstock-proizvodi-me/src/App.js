import NavBar from './NavBar'
import Search from './Search';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path = '/search'>
            <Search></Search>
          </Route>
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
