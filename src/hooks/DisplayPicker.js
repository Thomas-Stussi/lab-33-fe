import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export const useDisplayPicker = () => {
  const { display } = useContext(RecipeContext);

  return { display };
};
