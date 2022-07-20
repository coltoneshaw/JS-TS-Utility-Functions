## Usage

Used to get the formatted dates that occur between dates. This will return an object of years, months, and days. Great for forming a chart with a start/end date.

## Example:

```js
const inBetween = getDatesBetweenTwoDates('2022-01-01', '2022-01-03')
console.log(inBetween)
// {
//    days: ['2022-01-01', '2022-01-02', '2022-01-03'],
//    months: ['2022-01'],
//    years: ['2022'],
// }
```