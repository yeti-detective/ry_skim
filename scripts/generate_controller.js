const generateController = () => {
  const left = document.createElement('div');
  const jump = document.createElement('div');
  const right = document.createElement('div');

  left.id = 'left';
  jump.id = 'jump';
  right.id = 'right';

  jump.innerHTML = '<h2 id="jumpButton">J</h2>';

  const controller = document.getElementById('controller');
  controller.innerHTML = '';
  [left, jump, right].forEach((child) => {
    controller.appendChild(child);
  })
}

export default generateController;
