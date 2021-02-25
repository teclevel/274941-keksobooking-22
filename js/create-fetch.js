const createFetch = (onSuccess, onError) => () =>{
  return fetch('https://22.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};

//export {createFetch};
const fetchAdvertisement = createFetch((dat) => {
  console.log(dat);
},

(err) => {
  console.log(err);
});

fetchAdvertisement();
// export {fetchAdvertisement};
