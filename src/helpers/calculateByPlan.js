
/**
 * 
 * @param {String} plan 
 * @returns {Number}
 */
export const calculateByPlan = (plan) => {
  return  (plan === '1') ? 1.2 :
          (plan === '2') ? 1.5 : new Error('Invalid plan type');
}