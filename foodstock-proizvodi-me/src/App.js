import NavBar from './NavBar';
import Search from './Search';
import ProductDetails from './ProductDetails';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import AddProduct from './AddProducts';
function App() {
  return (
    <Router>
      
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path = '/search'>
            <Search></Search>
          </Route>
          <Route exact path = '/product/:id'>
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path = '/new-product-form'>
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
