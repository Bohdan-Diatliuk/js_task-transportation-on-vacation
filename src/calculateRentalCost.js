/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayCost = 40;
  const longTime = 7;
  const shortTime = 3;
  const longTimePrice = 50;
  const shortTimePrice = 20;
  let discount = 0;

  if (days >= longTime) {
    discount = longTimePrice;
  } else if (days >= shortTime) {
    discount = shortTimePrice;
  }

  return days * dayCost - discount;
}

module.exports = calculateRentalCost;
