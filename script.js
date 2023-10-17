let reset = document.getElementById('reset');
let count1 = 10;
let count2 = 25;
let count3 = 50;

let button1 = document.getElementById('button1');
let button4 = document.getElementById('button4');
let button7 = document.getElementById('button7');

let button2 = document.getElementById('button2');
let button5 = document.getElementById('button5');
let button8 = document.getElementById('button8');

let button3 = document.getElementById('button3');
let button6 = document.getElementById('button6');
let button9 = document.getElementById('button9');

reset.addEventListener('click', function() {
  document.getElementById('answer1').innerText = `10`;
  document.getElementById('answer2').innerText = `25`;
  document.getElementById('answer3').innerText = `50`;
  count1 = 10;
  count2 = 25;
  count3 = 50;
  button1.style.backgroundColor = '';
  button2.style.backgroundColor = '';
  button3.style.backgroundColor = '';
  button4.style.backgroundColor = '';
  button5.style.backgroundColor = '';
  button6.style.backgroundColor = '';
  button7.style.backgroundColor = '';
  button8.style.backgroundColor = '';
  button9.style.backgroundColor = '';
});

document.getElementById('button1').addEventListener('click', function() {
  if (count1 + 5 <= 100) {
    count1 += 5;
    document.getElementById('answer1').innerText = `${count1}`;
    this.style.backgroundColor = ""; // Reset the button color
    this.disabled = false; // Enable the button
  } else {
    this.style.backgroundColor = "red"; // Change the button color to red
    this.disabled = true; // Disable the button
  }
});

document.getElementById('button4').addEventListener('click', function() {
  count1 -= 11;
  document.getElementById('answer1').innerText = `${count1}`;
  if (count1 < 100) {
    document.getElementById('button1').style.backgroundColor = ""; // Reset the button color
    document.getElementById('button1').disabled = false; // Enable the button
  }
});

document.getElementById('button7').addEventListener('click', function() {
  count1 /= 2;
  document.getElementById('answer1').innerText = `${count1}`;
  if (count1 < 100) {
    document.getElementById('button1').style.backgroundColor = ""; // Reset the button color
    document.getElementById('button1').disabled = false; // Enable the button
  }
});

button2.addEventListener('click', function() {
  if (count2 * 2 <= 100) {
    count2 *= 2;
    document.getElementById('answer2').innerText = `${count2}`;
    this.style.backgroundColor = ""; // Reset the button color
    this.disabled = false; // Enable the button
  } else {
    this.style.backgroundColor = "red"; // Change the button color to red
    this.disabled = true; // Disable the button
  }
});

button5.addEventListener('click', function() {
  count2 /= 4;
  document.getElementById('answer2').innerText = `${count2}`;
  
  if (count2 < 100) {
    button2.style.backgroundColor = ""; // Reset the button color
    button2.disabled = false; // Enable the button
    button8.style.backgroundColor = ""; // Reset the button color
    button8.disabled = false; // Enable the button
  }
});

button8.addEventListener('click', function() {
  if (count2 + 10 <= 100) {
    count2 += 10;
    document.getElementById('answer2').innerText = `${count2}`;
    this.style.backgroundColor = ""; // Reset the button color
    this.disabled = false; // Enable the button
  } else {
    this.style.backgroundColor = "red"; // Change the button color to red
    this.disabled = true; // Disable the button
  }
});

button3.addEventListener('click', function() {
  count3 -= 10;
  document.getElementById('answer3').innerText = `${count3}`;
  
  if (count3 < 100) {
    button6.style.backgroundColor = ""; // Reset the button color
    button6.disabled = false; // Enable the button
    button9.style.backgroundColor = ""; // Reset the button color
    button9.disabled = false; // Enable the button
  }
});

button6.addEventListener('click', function() {
  if (count3 * 5 <= 100) {
    count3 *= 5;
    document.getElementById('answer3').innerText = `${count3}`;
    this.style.backgroundColor = ""; // Reset the button color
    this.disabled = false; // Enable the button
  } else {
    this.style.backgroundColor = "red"; // Change the button color to red
    this.disabled = true; // Disable the button
  }
});

button9.addEventListener('click', function() {
  if (count3 + 35 <= 100) {
    count3 += 35;
    document.getElementById('answer3').innerText = `${count3}`;
    this.style.backgroundColor = ""; // Reset the button color
    this.disabled = false; // Enable the button
  } else {
    this.style.backgroundColor = "red"; // Change the button color to red
    this.disabled = true; // Disable the button
  }
});
