import Notiflix from 'notiflix';

const form = document.querySelector('.form')
const amount = document.querySelector('[name="amount"]');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');

form.addEventListener('submit', (event) => {
  let initialDelayValue = Number(delay.value);
  let PromiseDelay = initialDelayValue;
  let isFirstIteration = true;
  event.preventDefault();
  if (initialDelayValue <= 0 || step.value <= 0 || amount.value <= 0) {
    return Notiflix.Report.warning(
      'Opss',
      'The number must be greater than 0',
      'Try again'
    );
  }
  for (let i = 1; i <= amount.value; i ++) {
    if (!isFirstIteration) {
      PromiseDelay += Number(step.value);
    }

    createPromise(i, PromiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`); 
      });

    isFirstIteration = false;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {

      if (shouldResolve) {
        const obj = { position, delay }
        resolve(obj)
      } else {

        const obj = { position, delay }
        reject(obj)
      }
    }, delay);

  });
}