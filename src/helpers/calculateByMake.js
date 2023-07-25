
/**
 * 
 * @param {String} make 
 * @returns {Number}
 */
export const calculateByMake = (make) => {
  let i = 0;

  switch (make) {
    case '1':
      i = 1.30;
      break;
    case '2':
      i = 1.15;
      break;
    case '3':
      i = 1.05;
      break;
    default:
      throw new Error('Invalid make type');
  }

  return i;
}