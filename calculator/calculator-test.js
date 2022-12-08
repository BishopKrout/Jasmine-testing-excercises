
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {
    amount: 150000,
    years: 30,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('760.03')
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values = {
    amount: 5000,
    years: 5,
    rate: 12
  };
  expect(calculateMonthlyPayment(values)).toEqual('111.22')
});

it('should handle any interest rate', function () {
  let values = {
    amount: 1000,
    years: 10,
    rate: 95
  };
  expect(calculateMonthlyPayment(values)).toEqual('79.18')
})
