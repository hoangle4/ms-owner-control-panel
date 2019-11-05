export const filterAsync = async (array, callback) => {
  const fail = Symbol();
  return (await Promise.all(
    arr.map(async item => ((await callback(item)) ? item : fail))
  )).filter(i => i !== fail);
};
