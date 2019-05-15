export const isArrayOK = (array) => {
  return array && Array.isArray(array) && !!array.length
}

// Object.prototype.isArrayOK = function() {
//   return Object && Array.isArray(Object) && !!Object.length
// }
