import React from 'react';
import { render } from '@testing-library/react';
import RecipeDisplay from './RecipeDisplay';

describe('<RecipeDisplay>', () => {
  it('renders the component with display', () => {
    const testDisplay = {
      'id': '1',
      'name': 'Tart de Bry',
      'ingredients': 'test ingredients',
      'directions': 'test directions',
      'source': 'test source',
      'date': 'test date'
    };

    const { asFragment } = render(
      <RecipeDisplay display={testDisplay} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
