const form = document.getElementById('form');
const pageNumberInput = document.getElementById('page-number');
const limitInput = document.getElementById('limit');
const requestButton = document.getElementById('request-button');
const resultDiv = document.getElementById('result');

requestButton.addEventListener('click', () => {
  const pageNumber = pageNumberInput.value;
  const limit = limitInput.value;
  let errorMessage = '';

  if (!(1 <= pageNumber && pageNumber <= 10) || isNaN(pageNumber)) {
    errorMessage += 'Page number outside the range from 1 to 10';
  }
  if (!(1 <= limit && limit <= 10) || isNaN(limit)) {
    if (errorMessage) {
      errorMessage += ' and ';
    }
    errorMessage += 'Limit outside the range from 1 to 10';
  }

  if (errorMessage) {
    resultDiv.innerHTML = errorMessage;
  } else {
    const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`;
    // make the request using fetch or XMLHttpRequest
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // save the data in localStorage
        localStorage.setItem('data', JSON.stringify(data));
        // display the images
        resultDiv.innerHTML = data.map(item => `<img style="margin: 10px" width="450" height="300" src="${item.download_url}">`).join('');
      })
      .catch(error => {
        console.error(error);
      });
  }
});

// if the data is saved in localStorage, display the images
const data = localStorage.getItem('data');
if (data) {
  resultDiv.innerHTML = JSON.parse(data).map(item => `<img src="${item.download_url}">`).join('');
}
