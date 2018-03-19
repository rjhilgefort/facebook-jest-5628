const app = require('./index');

it('returns a thing', () => {
  const actual = app('foo');
  const expected = 'hi foo';
  expect(actual).toEqual(expected);
})
