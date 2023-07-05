import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={RecipeList} />
        <Route path="/recipes/new" component={RecipeForm} />
        <Route path="/recipes/:id" component={RecipeDetails} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

