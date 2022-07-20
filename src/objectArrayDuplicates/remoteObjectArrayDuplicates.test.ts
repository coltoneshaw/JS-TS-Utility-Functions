test('Correctly removes duplicates in array', () => {
  const arrayWithDuplicates = [
    { test: 'test', id: 1 },
    { test: '2', id: 1 },
  ];
  expect(removeDuplicatesInArray(arrayWithDuplicates, 'id'))
    .toStrictEqual([arrayWithDuplicates[0]]);

  expect(removeDuplicatesInArray(arrayWithDuplicates, 'test'))
    .toStrictEqual(arrayWithDuplicates);
});