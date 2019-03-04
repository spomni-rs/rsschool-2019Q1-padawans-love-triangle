/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let arr = preferences
  
  preferences.forEach((ref, i, arr) => {
    arr[i] = ref - 1;
    if (arr[i] === i){
      arr[i] = undefined;
    }
  });
  
  arr.forEach((ref, i, arr) => {
    if (arr[arr[ref]] === i){
      count++;
      
      arr[arr[ref]] = undefined;
      arr[ref] = undefined;
      arr[i] = undefined;
    }
  });
  
  return count;
};