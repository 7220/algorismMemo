const customers = require('./data/input/customer.json')
const fs = require('fs')

const totalCustomers = customers.length

const result1 = {
  total: totalCustomers
}

fs.writeFileSync('./data/output/problem_1.json', JSON.stringify(result1))

const dormantCustomers = customers
  .filter(customer => customer.status === 'dormant')
  .map(customer => customer.customer_id)
  .sort((a, b) => a - b)

const result2 = dormantCustomers

fs.writeFileSync('./data/output/problem_2.json', JSON.stringify(result2))
