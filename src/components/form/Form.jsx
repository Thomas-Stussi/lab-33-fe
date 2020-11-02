/* eslint-disable max-len */
import React, { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext';
import styles from './Form.css';

// eslint-disable-next-line react/prop-types
const Form = () => {
  const { handleSubmit, handleChange } = useContext(RecipeContext);
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Welcome to Historical Recipes, Use GET to see all!</h1>

        <section className={styles.form}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" onChange={handleChange} />

          <label htmlFor="ingredients" >Ingredients</label>
          <input id="ingredients" name="ingredients" onChange={handleChange} />

          <label htmlFor="directions" >Directions</label>
          <input id="directions" name="directions" onChange={handleChange} />

          <label htmlFor="source" >Source</label>
          <input id="source" name="source" onChange={handleChange} />

          <label htmlFor="date" >Date</label>
          <input id="date" name="date" onChange={handleChange} />

          <label htmlFor="id">ID</label>
          <input type="number" id="id" name="id" data-testid="id" onChange={handleChange} />
        </section>

        <section>
          <input type="radio" id="get" name="method" value="GET" data-testid="get" onChange={handleChange} />
          <label htmlFor="get">GET</label>

          <input type="radio" id="post" name="method" value="POST" onChange={handleChange} />
          <label htmlFor="post">POST</label>

          <input type="radio" id="put" name="method" value="PUT" onChange={handleChange} />
          <label htmlFor="put">PUT</label>

          <input type="radio" id="patch" name="method" value="PATCH" onChange={handleChange} />
          <label htmlFor="patch">PATCH</label>

          <input type="radio" id="delete" name="method" value="DELETE" onChange={handleChange} />
          <label htmlFor="delete">DELETE</label>
        </section>

        <button>Create Fetch!</button>
      </form>
    </>
  );
};

export default Form;
