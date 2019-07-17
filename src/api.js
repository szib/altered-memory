export default (url, options = {}) =>
  fetch(url, options).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return new Promise(resp.json());
  });
