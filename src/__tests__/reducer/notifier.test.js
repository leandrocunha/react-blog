import notifier from '../../reducers/notifier';

describe('notifier reducer', () => {
  it('should return the initial state', () => {
    expect(notifier(undefined, {})).toEqual({
      show: false
    });
  });

  it('should close notifier', () => {
    expect(
      notifier([], {
        type: 'NOTIFIER/CLOSE'
      })
    ).toEqual({
      show: false
    });
  });
});
