const statement = require("./statement")
const invoices = {
  "customer": "BigCo",
  "performances": [
    {
      "playID": "hamlet",
      "audience": 55
    },
    {
      "playID": "aslike",
      "audience": 35
    },
    {
      "playID": "othello",
      "audience": 40
    }
  ]
}

const plays = {
  "hamlet": {
    "name": "Hamlet",
    "type": "tragedy"
  },
  "aslike": {
    "name": "AsYouLikeIt",
    "type": "comedy"
  },
  "othello": {
    "name": "Othello",
    "type": "tragedy"
  }
}

test(`statement`, () => {
  expect(statement(invoices, plays)).toBe(
`Statement for BigCo
 Hamlet: $650.00 (55 seats)
 AsYouLikeIt: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`)
})
