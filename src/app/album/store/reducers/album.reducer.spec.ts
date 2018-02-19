import { reducer, initialAlbumsState } from '../reducers/album.reducer';

describe('Album Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialAlbumsState, action);

      expect(result).toBe(initialAlbumsState);
    });
  });
});
