const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const value = input.value;

  if (value < 1 || value > 10) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'number is outside the range from 1 to 10';
    document.body.appendChild(errorMessage);
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://picsum.photos/v2/list?limit=${value}`);

    xhr.onload = function() {
      if (xhr.status !== 200) {
        console.log('Error: ', xhr.status);
      } else {
        const data = JSON.parse(xhr.response);
        data.forEach(item => {
          const img = document.createElement('img');
          img.src = item.download_url;
          img.width = 450;
          img.style.margin = '10px'
          document.body.appendChild(img);
        });
      }
    };

    xhr.send();
  }
});
