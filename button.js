function showBox(day) {
  const box = document.getElementById('box');
  const button = event.target;
  const colors = {
    Monday: 'red',
    Tuesday: 'orange',
    Wednesday: 'yellow',
    Thursday: 'green',
    Friday: 'blue',
    Saturday: 'indigo',
    Sunday: 'violet'
  };

  box.style.backgroundColor = colors[day];
  box.style.display = 'block';
  setTimeout(function() {
    box.style.animation = 'slideIn 1s forwards';
  }, 100);

  button.style.color = colors[day] === 'yellow' ? 'black' : 'white';
}
