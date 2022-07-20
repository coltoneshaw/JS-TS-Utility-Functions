/**
 *
 * @param data The total data array
 * @param idAttribute the ID attribute used to remove duplicate matches
 * @returns cleaned array with only one item per ID attribute
 */
 const removeDuplicatesInArray = (
  data: any[],
  idAttribute: string,
) => {
  const newSet = Array.from(new Set(data.map((a) => a[idAttribute])));
  return newSet.map((id) => data.find((a) => a[idAttribute] === id));
};