const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if(response.ok){
        return response.json();
      }
    })
    .then ((addMarkers) => {
      onSuccess(addMarkers);
    })
    // .catch ((err) => {
    //   console.error(err);
    // });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
  // .catch(() => {
  //   console.log('error!')
  // });
};

export {getData, sendData};
