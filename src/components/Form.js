import React from 'react';

const Form = props => (
    <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem"}} >
    <input className="form__input" type="text" name='recipeName'/>
    <button className="form__button">Buscar</button>
    </form>
);
  export default Form; 
    
        

    