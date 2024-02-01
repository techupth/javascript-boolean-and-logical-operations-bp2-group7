// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let Case1 = (lastMonthPaidMoreThan4000 && isWeekday && hasBoughtProductFromITCategory && hasAttendedDiscountEvent) 
let Case2 = isPlatinum
let hasPromotion = Case1 || Case2


console.log("Case1:",Case1);
console.log("Case2", Case2);
console.log(hasPromotion)

