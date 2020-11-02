import React from 'react';
import ReactJson from 'react-json-view';

// eslint-disable-next-line react/prop-types
const RecipeDisplay = ({ display }) => {
  return (
    <pre data-testid="display">
      <ReactJson src={display} displayDataTypes={false} />
    </pre>
  );
};

export default RecipeDisplay;
