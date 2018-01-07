
module.exports = function flattenArray(arrayToFlatten) {
  if (!Array.isArray(arrayToFlatten)) return null;

  return arrayToFlatten.reduce((prev, curr) => {
    const flattenedCurr = Array.isArray(curr) ? flattenArray(curr) : [curr];
    return prev.concat(flattenedCurr);
  }, []);
};
