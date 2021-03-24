const bars = document.getElementById('bars');
const close = document.getElementById('close');

bars.onclick = () => {
  anime({
    targets: '#nav',
    right: 0,
    easing: 'linear',
    duration: 300
  });
};

close.onclick = () => {
  anime({
    targets: '#nav',
    right: -300,
    easing: 'linear',
    duration: 300
  })
};
