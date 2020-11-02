import React from 'react';
import { RecipeProvider } from '../../context/RecipeContext';
import HistoricalRecipes from '../HistoricalRecipes/HistoricalRecipes';


export default function App() {

  return (
    <RecipeProvider>
      <HistoricalRecipes />
    </RecipeProvider>
  );
}
