import React from 'react'
import TestRenderer from 'react-test-renderer';

import Button from 'components/Button';

describe('<Button />', () => {
  it('Render Button without className', () => {
    const tree = TestRenderer
      .create(<Button>Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
});