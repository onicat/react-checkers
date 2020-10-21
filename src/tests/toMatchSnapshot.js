import TestRenderer from 'react-test-renderer';

const toMatchSnapshot = (component) => {
  const tree = TestRenderer
    .create(component)
    .toJSON();
  expect(tree).toMatchSnapshot();
};

export default toMatchSnapshot;