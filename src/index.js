import './styles.css';

document.write('Hello, Webpack!');
const dataElement = document.querySelector('.data');
function useRequest (method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
};
useRequest('GET', 'http://localhost:3000/contacts').then(data => {
  dataElement.innerHTML = JSON.stringify(data);
});
