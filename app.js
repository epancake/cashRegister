var stdin = "15.94 100.00"
// Change the numbers in the stdin variable, and the cash denominations for that need to be given to the customer will be printed out. 
// The first number in the stdin variable is the cost, and the second number is the customer's cash amount.
// This example "15.94 100.00" returns a string: 'FIFTY, TWENTY, TEN, 4 ONES, NICKEL, PENNY'

const cashRegister = (input) => {
  let finalString = ""
  let newArray = input.split(" ")
  let cost = newArray[0]
  let payment = newArray[1]
  let remainder = (payment - cost).toFixed(2)

  if (remainder < 0) {
    finalString += "ERROR  "
  }

  money.forEach(item => {
    if (remainder >= item.value) {
      let quantity = Math.floor(remainder/item.value)
      if (quantity === 1) {
        finalString += item.name + ", "
      } 
      if (quantity > 1) {
        finalString += quantity + " " + item.pluralName + ", "
      }
        remainder -= item.value * quantity
        remainder = remainder.toFixed(2)
    }
  })

  return finalString.slice(0, -2)
}

const money = [
  {
    name: "HUNDRED",
    pluralName: "HUNDREDS",
    value: 100
  },
  {
    name: "FIFTY",
    pluralName: "FIFTIES",
    value: 50
  },
    {
    name: "TWENTY",
    pluralName: "TWENTIES",
    value: 20
  },
    {
    name: "TEN",
    pluralName: "TENS",
    value: 10
  },
  {
    name: "FIVE",
    pluralName: "FIVES",
    value: 5
  },
    {
    name: "ONE",
    pluralName: "ONES",
    value: 1
  },
    {
    name: "QUARTER",
    pluralName: "QUARTERS",
    value: .25
  },
    {
    name: "DIME",
    pluralName: "DIMES",
    value: .1
  },
    {
    name: "NICKEL",
    pluralName: "NICKELS",
    value: .05
  },
    {
    name: "PENNY",
    pluralName: "PENNIES",
    value: .01
  },
]

cashRegister(stdin)
