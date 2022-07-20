
## Usage
Removing duplicate objects from an array based on the ID column. 

## Note
This can have unexpected behavior if your two objects contain the same key with different values in the object.

```js
const arrayWithDuplicates = [
    { test: 'test', id: 1 },
    { test: '2', id: 1 },
  ];

const cleanedArray = removeDuplicatesInArray(arrayWithDuplicates, 'id');

console.log(cleanedArray)
// [{ test: 'test', id: 1 }]
```
