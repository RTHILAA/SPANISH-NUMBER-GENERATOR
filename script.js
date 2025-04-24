function generate() {
  let number = '6'; 
  for (let i = 0; i < 8; i++) {
    number += Math.floor(Math.random() * 10);
  }
  return `+34 ${number}`;
}

  let result = document.getElementById('result');
  let btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
    result.textContent = generate();
  });