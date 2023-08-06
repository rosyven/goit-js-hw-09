import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btn = document.querySelector('button');
const input = document.querySelector('#datetime-picker');
btn.disabled = true;

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      btn.disabled = false;
    }
  },
};
flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

btn.addEventListener('click', function () {
  const selectedDate = flatpickr.parseDate(input.value, 'Y-m-d H:i');

  const timerlId = setInterval(() => {
    const timeDifference = selectedDate - new Date();

    if (timeDifference >= 0) {
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      document.querySelector('span[data-days]').textContent =
        addLeadingZero(days);
      document.querySelector('span[data-hours]').textContent =
        addLeadingZero(hours);
      document.querySelector('span[data-minutes]').textContent =
        addLeadingZero(minutes);
      document.querySelector('span[data-seconds]').textContent =
        addLeadingZero(seconds);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
});
