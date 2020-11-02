import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import Form from './Form';
import { RecipeProvider } from '../../context/RecipeContext';

describe('<Form>', () => {
  it('renders the form', () => {
    const { asFragment } = render(
      <RecipeProvider>
        <Form />
      </RecipeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
