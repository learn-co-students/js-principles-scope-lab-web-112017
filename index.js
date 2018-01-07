// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'david';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

function attemptTwoFavoriteCustomers() {
  const favoriteCustomer = 'david';
  const favoriteCustomer = 'bob';
}
