const ourPromise = new Promise((resolve, reject) => {
    reject('Just because we can');
});

ourPromise.then((response) => console.log(response));
ourPromise.catch((error) => console.log(error));

const isEven = (number) => {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) resolve(true);
        reject(false);
    });
};

isEven(2)
    .then((response) => console.log('Broj je paran', response))
    .catch((error) => console.log('Broj je neparan', error))
    .finally(() => console.log('My work is done'));
