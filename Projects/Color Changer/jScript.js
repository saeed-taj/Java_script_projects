//console.log('Hello!');

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function (ev) {
    console.log(ev.target);

    if (ev.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }

    if (ev.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }

    if (ev.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }

    if(ev.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow';
    }

  });

});
