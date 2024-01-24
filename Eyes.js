const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  // balls[0].style.left = x;
  // balls[0].style.top = y;
  // balls[0].transform = 'translate(-' + x + ',-' + y + ')';

  for (let a = 0; a < 2; a++) {
    balls[a].style.left = x;
    balls[a].style.top = y;
    balls[a].transform = 'translate(-' + x + ',-' + y + ')';
  }

};

