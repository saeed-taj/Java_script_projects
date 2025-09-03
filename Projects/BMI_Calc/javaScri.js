const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#result');

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Enter a valid height ${height} `;
  } 
  
  else if (weight === '' || weight <= 0 || isNaN(weight)) {
  
    result.innerHTML = `Enter a valid weight ${weight}`;
  } 
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span> <br/>`;
    if (bmi < 18.6) {
      result.innerHTML += `Under Weight`;
    } 
    
    else if (bmi > 18.6 && bmi < 24.6) {
      result.innerHTML += `Normal Range`;
    } 
    
    else {
      result.innerHTML += `Over Weight`;
    }
  }
});
