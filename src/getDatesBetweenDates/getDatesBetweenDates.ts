/**
 *
 * @param startDate string date formatted like `YYYY-mm-dd`
 * @param endDate string date formatted like `YYYY-mm-dd`
 * @returns array of months, years, and dates between the start / finish day.
 *
 * https://stackoverflow.com/a/64057471/13836826
 */
 function getDatesBetweenTwoDates(startDate: string, endDate: string) {
  const days = [];
  const months = new Set();
  const years = new Set();

  const dateMove = new Date(startDate);
  let date = startDate;

  while (date < endDate) {
    date = dateMove.toISOString().slice(0, 10);
    months.add(date.slice(0, 7));
    years.add(date.slice(0, 4));
    days.push(date);
    dateMove.setDate(dateMove.getDate() + 1); // increment day
  }
  return {
    years: [...Array.from(years)],
    months: [...Array.from(months)],
    days,
  };
}