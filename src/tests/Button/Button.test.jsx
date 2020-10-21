import React from 'react'

import Button from 'components/Button';
import toMatchSnapshot from 'tests/toMatchSnapshot';

describe('<Button />', () => {
  it('Render Button without className', () => {
    toMatchSnapshot(<Button>Button</Button>);
  });
});