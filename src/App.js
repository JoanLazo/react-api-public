import React, { Component } from 'react';
import './App.css';
// import Router from './components/Router';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY= "d8e51b0e060abe5b4da35c5260931229";

class App extends Component {
  state = {
    recipes : []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes })
    console.log(this.state.recipes);
  }
  
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Busqueda de Platillos</h1>
        </header>
        <Form getRecipe={this.getRecipe} /> 
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;