/* eslint-disable keyword-spacing */
import React, { useState } from 'react';
import { recipeFetch } from '../services/historicalRecipesApi';

export const RecipeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const RecipeProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');
  const [method, setMethod] = useState('GET');
  const [id, setId] = useState(null);
  const [display, setDisplay] = useState({ 'Please': 'make a Request' });

  const handleChange = ({ target }) => {
    if (target.name === 'name') setName(target.value);
    if (target.name === 'ingredients') setIngredients(target.value);
    if (target.name === 'directions') setDirections(target.value);
    if (target.name === 'source') setSource(target.value);
    if (target.name === 'date') setDate(target.value);
    if (target.name === 'method') setMethod(target.value);
    if (target.name === 'id') setId(target.value);
  };

  const body = {
    name,
    ingredients,
    directions,
    source,
    date,
  };

  const handleSubmit = event => {
    event.preventDefault();

    return recipeFetch(method, JSON.stringify(body), id)
      .then(res => setDisplay(res));
  };

  const recipeArray = () => {
    return recipeFetch();
  };

  const bucket = {
    name,
    ingredients,
    directions,
    source,
    date,
    handleChange,
    handleSubmit,
    recipeArray,
    method,
    body,
    display
  };

  return (
    <RecipeContext.Provider value={bucket}>
      {children}
    </RecipeContext.Provider>
  );
};
