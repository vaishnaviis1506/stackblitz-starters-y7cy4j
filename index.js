const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

//function 1
function getWelcomeMessage() {
  return 'Welcome to our service!';
}

app.get('/Welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

//function2
function getGreetingMessage(username) {
  return 'Hello,  ' + username + '!';
}
app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

//function3
function checkPassword(password) {
  if (password.length > 15) {
    return 'Password is Strong.';
  } else {
    return 'Password is week.';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

//function4
function CalculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}
app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(CalculateSum(num1, num2));
});

//function5
function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - (price * 10) / 100;
  return finalPrice.totring();
}
app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscountedPrice(price, discount));
});

//function6

function getGreeting(age, gender, name) {
  return ' Hello ,' + name + ' !you are a ' + age + ' Year old ' + gender + '.';
}
app.get('/personalized-Greeting', (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getGreeting(age, gender, name));
});

//function7: Return The Final Price After Applying Discount And Tax?
function calculateFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}
app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.dscount);
  let tax = parseFloat(req.query.tax);
  res.send(calculateFinalPrice(price, discount, tax));
});
//Excercise Time
function calculateTotalExcerciseTime(running, cycling, swimming) {
  let final=running + cycling + swimming;
  return final.toString();
}
app.get('/total-excercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(calculateTotalExcerciseTime(running, cycling, swimming));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
