import { computeClasses } from 'js/utils.js'

describe('computeClasses util', () => {
  it('Compute classes with falthy property in argument', () => {
    expect(computeClasses({
      'Class1': true,
      'Class which does not apply': false
    })).toMatch('Class1');
  });

  it('Compute many classes', () => {
    expect(computeClasses({
      'Class1': true,
      'Class2': true,
      'Class3': true,
      'Class4': true,
      'Class5': true,
    })).toMatch('Class1 Class2 Class3 Class4 Class5');
  });

  it('Compute classes with empty list (argument-object)', () => {
    expect(computeClasses({})).toMatch('')
  });
});