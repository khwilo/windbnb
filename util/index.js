/*
 * Retrieve city and country as the search options.
 *
 * @param {number[]} arr
 * @return {number[]}
 */
export const locationSearchOptions = (arr = []) => {
  const flag = {};
  const options = [];
  const cityCountryArr = arr.map(({ city, country }) => {
    return { city, country };
  }); // Create a new array consisting of objects with only the city and country properties

  for (let i = 0; i < cityCountryArr.length; i += 1) {
    if (!flag[cityCountryArr[i].city]) {
      flag[cityCountryArr[i].city] = true;
      options.push(cityCountryArr[i]);
    }
  }

  return options;
};
