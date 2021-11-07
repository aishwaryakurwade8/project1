
import './App.css';
import {Route,Switch,NavLink} from 'react-router-dom';
import Home from './components/router/Home';
import Product from './components/router/Product';
import Instruction from './components/router/Instruction'
// import MyComponent from './demo/MyComponent'


function App() {
  return (
    <div className="App"> 

<NavLink exact activeClassName="active" to="/">Home</NavLink>|
      <NavLink exact activeClassName="active" to="/product">Product</NavLink>|
      <NavLink exact activeClassName="active" to="/instruction">Instruction</NavLink>

      <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route exact path="/product" component={Product}/>
        <Route exact path="/instruction" component={Instruction}/>
    
        {/* <Route  component={PageNotFound}/> */}
      </Switch> 
      {/* <MyComponent/> */}
     

    </div>
  );
}

export default App;
