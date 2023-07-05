
import './App.css';
import NavBar from './components/NavBar';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route path="/recipes/:id" component={RecipeDetails} />
        <Route path="/recipes/new" component={RecipeForm} />
      </Switch>
      
    </Router>
  );
}

export default App;
