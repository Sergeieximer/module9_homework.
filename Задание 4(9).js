const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const value1 = input1.value;
  const value2 = input2.value;

  if (isNaN(value1) || isNaN(value2) || value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'one of the numbers is outside the range from 100 to 300';
    document.body.appendChild(errorMessage);
  } else {
    fetch(`https://picsum.photos/${value1}/${value2}`)
      .then(response => response.blob())
      .then(blob => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        img.width = 350;
        img.style.margin = '50px'
        document.body.appendChild(img);
      })
      .catch(error => console.log(error));
  }
});
