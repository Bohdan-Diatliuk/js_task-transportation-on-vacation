/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const baseDailyRate = 40;
  const LONG_TERM_THRESHOLD = 7;
  const MID_TERM_THRESHOLD = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  let discount = 0;

  if (days >= LONG_TERM_THRESHOLD) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM_THRESHOLD) {
    discount = MID_TERM_DISCOUNT;
  }

  return days * baseDailyRate - discount;
}

module.exports = calculateRentalCost;
