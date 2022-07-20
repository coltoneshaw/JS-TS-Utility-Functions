Usage: Sorting an array of objects based on a value within an object

```js
const dataToBeSorted = [
    { total_profit: 100, name: 'big profit' },
    { total_profit: 0, name: 'bigger profit' },
    { total_profit: 101, name: 'bigger profit' },
  ];

const secondValue = dataToBeSorted.sort(dynamicSort('total_profit'))[1]

console.log(firstValue) 
// { total_profit: 100, name: 'big profit' }
```