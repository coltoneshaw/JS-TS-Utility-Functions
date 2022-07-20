/**
 *
 * @param property property to sort the array based on
 * @returns function to be used in `.sort()`
 */
 function dynamicSort(property: string) {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    // eslint-disable-next-line no-param-reassign
    property = property.substr(1);
  }
  return (a: any, b: any) => {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */

    let result = 0;
    if (a[property] < b[property]) result = -1;
    if (a[property] > b[property]) result = 1;
    // const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  };
}