import React from 'react';
import { useDisplayPicker } from '../../hooks/DisplayPicker';
import Form from '../form/Form';
import RecipeDisplay from '../RecipeDisplay/RecipeDisplay';

const HistoricalRecipes = () => {
  const { display } = useDisplayPicker();

  return (
    <>
      <Form />
      <RecipeDisplay display={display} />
    </>
  );
};

export default HistoricalRecipes;
