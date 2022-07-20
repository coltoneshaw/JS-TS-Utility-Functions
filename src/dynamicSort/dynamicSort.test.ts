test('Correctly sorts arrays based on key', () => {
  const dataToBeSorted = [
    { total_profit: 100, name: 'big profit' },
    { total_profit: 0, name: 'bigger profit' },
    { total_profit: 101, name: 'biggest profit' },
  ];
  expect(dataToBeSorted.sort(dynamicSort('total_profit'))[1])
    .toStrictEqual({ total_profit: 100, name: 'big profit' });
});
