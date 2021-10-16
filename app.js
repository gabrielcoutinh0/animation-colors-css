const spanH1 = document.documentElement.getElementsByTagName('span');

function getRandomColor(){
  const letters = '0123456789ABCDEF';
  let hash = '#';
  for(let i = 0; i < 6; i++)
    hash += letters[Math.floor(Math.random() * 16)];
  return hash;
}

function setRandomColor(){
  for(let i = 0; i < spanH1.length; i++){
		spanH1[i].style.backgroundImage = `linear-gradient(90deg, ${getRandomColor()}, ${getRandomColor()}`;
  }
}
setRandomColor();
setInterval(() => {
  setRandomColor();
}, 10200);