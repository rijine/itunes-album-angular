import { KeysPipe } from './keys.pipe';

describe('KeysPipe', () => {
  let pipe: KeysPipe;
  beforeEach(() => {
    pipe = new KeysPipe();
  });

  it('should return an array of keys if object is passed', () => {
    const obj = {
      name: 'test',
      age: 30
    };
    const arr = ['name', 'age'];
    expect(pipe.transform(obj, [])).toEqual(arr);
  });
});
