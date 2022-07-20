test('Returns date array', () => {
  expect(getDatesBetweenTwoDates('2022-01-01', '2022-01-03'))
    .toStrictEqual(
      {
        days: ['2022-01-01', '2022-01-02', '2022-01-03'],
        months: ['2022-01'],
        years: ['2022'],
      },
    );
});